using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VinylCollection.Data;
using VinylCollection.Models;

namespace VinylCollection.Routes;

public static class VinylRoute
{
    public static void VinylRoutes(this WebApplication app)
    {
        var route = app.MapGroup("vinyl");

        route.MapPost("", async (VinylRequest request, VinylContext context) =>
        {
            var vinyl = new VinylModel(request.artist, request.title, request.year);
            
            await context.AddAsync(vinyl);
            await context.SaveChangesAsync();
        });

        route.MapGet("", async (VinylContext context) =>
        {
            var vinyls = await context.Vinyls.ToListAsync();
            return Results.Ok(vinyls);
        });

        route.MapGet("{id:int}", async (int id, VinylContext context) =>
        {
            var vinyl = await context.Vinyls.FirstOrDefaultAsync(x => x.Id == id);

            if (vinyl == null)
                return Results.NotFound();

            return Results.Ok(vinyl);
        });

        route.MapPut("{id:int}", async (int id, VinylRequest request, VinylContext context) =>
        {
            var vinyl = await context.Vinyls.FirstOrDefaultAsync(x => x.Id == id);

            if (vinyl == null)
                return Results.NotFound();

            vinyl.Artist = request.artist;
            vinyl.Title = request.title;
            vinyl.Year = request.year;
            await context.SaveChangesAsync();

            return Results.Ok(vinyl);
        });

        route.MapDelete("{id:int}", async (int id, VinylContext context) =>
        {
            var vinyl = await context.Vinyls.FirstOrDefaultAsync(x => x.Id == id);

            if (vinyl == null)
                return Results.NotFound();

            context.Remove(vinyl);
            await context.SaveChangesAsync();

            return Results.Ok();
        });
    }
}
