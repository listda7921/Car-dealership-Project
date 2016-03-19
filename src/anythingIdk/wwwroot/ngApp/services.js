var anythingIdk;
(function (anythingIdk) {
    var Services;
    (function (Services) {
        var MovieService = (function () {
            function MovieService($resource) {
                this.MovieResource = $resource('/api/movies');
            }
            MovieService.prototype.listMovies = function () {
                return this.MovieResource.query();
            };
            return MovieService;
        }());
        Services.MovieService = MovieService;
        angular.module('anythingIdk').service('movieService', MovieService);
        var MyService = (function () {
            function MyService() {
            }
            return MyService;
        }());
        Services.MyService = MyService;
        angular.module('anythingIdk').service('myService', MyService);
    })(Services = anythingIdk.Services || (anythingIdk.Services = {}));
})(anythingIdk || (anythingIdk = {}));
//# sourceMappingURL=services.js.map