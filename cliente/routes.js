(function() {
    'use strict';
    
    angular
        .module('cliente')
        .config(Config);
    
    function Config($routeProvider) {
        $routeProvider
            .when('/clientes', {
                templateUrl: 'cliente/cliente.html',
                controller: 'ClienteController',
                controllerAs: 'vm'
            });
    }
})();