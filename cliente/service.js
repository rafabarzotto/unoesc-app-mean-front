(function() {
    'use strict';
    
    angular
        .module('cliente')
        .service('ClienteService', ClienteService);
    
    ClienteService.$inject = ['API','$http'];
    
    function ClienteService(API,$http) {
        this.findAll = function() {
            return $http.get(API.url + 'clientes');
        }
        this.create = function(cliente) {
            return $http.post(API.url + 'clientes', cliente);
        }
        this.update = function(cliente) {
            return $http.put(API.url + 'clientes/' + cliente._id, cliente);
        }
        this.remove = function(id) {
            return $http.delete(API.url + 'clientes/' + id);
        }
    }
})();