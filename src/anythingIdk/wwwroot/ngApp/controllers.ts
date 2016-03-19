namespace anythingIdk.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
        public movies;

        constructor(movieService: anythingIdk.Services.MovieService) {
            this.movies = movieService.listMovies();
        }
    }

    export class AboutController {
        public message = 'Hello from the about page!';
    }

    export class CarMakesController {
        public Makes;
        public selectedMake;
        public cars;
        public selectedModel;
        public modelInfo;
        public search;
        public Result;
        public carsArray = [];
        public searchResults = [];
        constructor(private $http: ng.IHttpService) {
            $http.get<any>(`/api/makes`)
                .then((response) => {
                    this.Makes = response.data;
                    
                })
            $http.get<any>(`/api/cars`)
                .then((response) => {
                    this.carsArray = response.data;
                })
        }

        public getCars() {
            this.$http.get<any>(`/api/cars`)
                .then((response) => {
                    this.cars = response.data;
                    
                })
        }

        public getCarInfo(car) {
            this.$http.get(`/api/cars/${car.id}`)
                .then((response) => {
                    this.modelInfo = response.data;
                })
        }
        public searchFilter_v2() {
            this.searchResults =[];
            let car;
            for (car of this.carsArray) {
                if (car.shortDescription.toLowerCase().search(this.search) !== -1) {
                    this.searchResults.push(car);
                }
                if (this.search === '') {
                    this.searchResults = [];
                }
            }
        }
    }
}