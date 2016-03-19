using System.Collections.Generic;
using anythingIdk.Models;

namespace anythingIdk.Services
{
    public interface IMovieService
    {
        void DeleteMovie(int id);
        Movie FindMovie(int id);
        IList<Movie> ListMovies();
        void SaveMovie(Movie movie);
    }
}
