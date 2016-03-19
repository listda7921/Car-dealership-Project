using System.Collections.Generic;
using anythingIdk.Models;

namespace anythingIdk.Services
{
    public interface IGenreService
    {
        Genre FindGenre(int id);
        IList<Genre> ListGenres();
    }
}
