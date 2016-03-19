var anythingIdk;
(function (anythingIdk) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(movieService) {
                this.message = 'Hello from the home page!';
                this.movies = movieService.listMovies();
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AboutController = (function () {
            function AboutController() {
                this.message = 'Hello from the about page!';
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
        var CarMakesController = (function () {
            function CarMakesController($http) {
                var _this = this;
                this.$http = $http;
                this.carsArray = [];
                this.searchResults = [];
                $http.get("/api/makes")
                    .then(function (response) {
                    _this.Makes = response.data;
                });
                $http.get("/api/cars")
                    .then(function (response) {
                    _this.carsArray = response.data;
                });
            }
            CarMakesController.prototype.getCars = function () {
                var _this = this;
                this.$http.get("/api/cars")
                    .then(function (response) {
                    _this.cars = response.data;
                });
            };
            CarMakesController.prototype.getCarInfo = function (car) {
                var _this = this;
                this.$http.get("/api/cars/" + car.id)
                    .then(function (response) {
                    _this.modelInfo = response.data;
                });
            };
            CarMakesController.prototype.searchFilter_v2 = function () {
                this.searchResults = [];
                var car;
                for (var _i = 0, _a = this.carsArray; _i < _a.length; _i++) {
                    car = _a[_i];
                    if (car.shortDescription.toLowerCase().search(this.search) !== -1) {
                        this.searchResults.push(car);
                    }
                    if (this.search === '') {
                        this.searchResults = [];
                    }
                }
            };
            return CarMakesController;
        }());
        Controllers.CarMakesController = CarMakesController;
    })(Controllers = anythingIdk.Controllers || (anythingIdk.Controllers = {}));
})(anythingIdk || (anythingIdk = {}));
//# sourceMappingURL=controllers.js.map