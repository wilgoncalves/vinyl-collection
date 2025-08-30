using System.ComponentModel.DataAnnotations;

namespace VinylCollection.Models;

public class VinylModel
{
    public VinylModel(string artist, string title, int year)
    {
        Artist = artist;
        Title = title;
        Year = year;
    }

    [Key]
    public int Id { get; init; }
    public string Artist { get; set; }
    public string Title { get; set; }
    public int Year { get; set; }
}
