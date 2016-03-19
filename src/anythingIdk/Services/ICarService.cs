using System.Collections.Generic;
using anythingIdk.Models;

namespace anythingIdk.Services
{
    public interface ICarService
    {
        Car FindCar(int id);
        IEnumerable<Car> ListCars();
        IEnumerable<CarMake> ListMakes();
    }
}
