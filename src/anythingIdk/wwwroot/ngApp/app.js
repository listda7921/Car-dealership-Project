var anythingIdk;
(function (anythingIdk) {
    angular.module('anythingIdk', ['ui.router', 'ngResource', 'ui.bootstrap']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        // Define routes
        $stateProvider
            .state('home', {
            url: '/home',
            templateUrl: '/ngApp/home.html',
            controller: anythingIdk.Controllers.HomeController,
            controllerAs: 'controller'
        })
            .state('about', {
            url: '/about',
            templateUrl: '/ngApp/about.html',
            controller: anythingIdk.Controllers.AboutController,
            controllerAs: 'controller'
        })
            .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/notFound.html'
        })
            .state("makes", {
            url: "/",
            templateUrl: "/ngApp/makes.html",
            controller: anythingIdk.Controllers.CarMakesController,
            controllerAs: "controller"
        });
        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');
        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });
})(anythingIdk || (anythingIdk = {}));
//# sourceMappingURL=app.js.map