module etracker.route {
    angular.module("etracker.route", ["ui.router", "oc.lazyLoad"])
        .config(routeConfig);
    routeConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
    function routeConfig($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider): void {
        $urlRouterProvider.otherwise("login");
        // const loginState: ng.ui.IState = {
        //     name: "login",
        //     url: "/login",
        //     templateUrl: "/app/login/login.app.html",
        // };
        $stateProvider.state("login",
            {   url: "/login",
                templateUrl: "/app/login/login.app.html",
                controller: "LoginController",
                controllerAs: "vm",
                resolve: {
                    loadLoginModule: function($ocLazyLoad: oc.ILazyLoad): any {
                        return $ocLazyLoad.load({
                            serie: true,
                            files: ["app/login/login.app.svc.js",
                        "app/login/login.app.ctrl.js"],
                    }); },
                 },
            }).state("form", {
                url: "/form",
                template: "<h1>hellow</h1>",
            });

}

}
