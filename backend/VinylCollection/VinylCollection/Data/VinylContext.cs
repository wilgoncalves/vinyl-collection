using Microsoft.EntityFrameworkCore;
using VinylCollection.Models;

namespace VinylCollection.Data;

public class VinylContext : DbContext
{
    public DbSet<VinylModel> Vinyls { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=vinyl.sqlite");
        base.OnConfiguring(optionsBuilder);
    }
}
