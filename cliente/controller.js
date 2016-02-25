(function() {
	'use strict';

	angular
		.module('cliente')
		.controller('ClienteController', ClienteController);

	ClienteController.$inject = ['ClienteService'];

	function ClienteController(ClienteService) {
		var vm = this;
		vm.empty = {};

		vm.findAll = function() {
			ClienteService.findAll().then(
				function(response) {
					console.log(response);
					vm.clientes = response.data;
				},
				function(error) {
					console.log(error);
				});
		};

		vm.findAll();

		vm.reset = function() {
			vm.cliente = angular.copy(vm.empty);
		};

		vm.save = function(cliente) {
			if (cliente._id) {
				ClienteService.update(cliente).then(
					function(response) {
						vm.success = response.data;
						vm.findAll();
						vm.reset();
					},
					function(error) {
						console.log(error);
						vm.error = error.data;
					});
			} else {
				ClienteService.create(cliente).then(
					function(response) {
						vm.success = response.data;
						vm.findAll();
						vm.reset();
					},
					function(error) {
						console.error(error);
						vm.error = error.data;
					}
				);
			}
		};

		vm.populate = function(cliente) {
			vm.cliente = angular.copy(cliente);
		};

		vm.remove = function(cliente) {
			if (confirm('Tem Certeza que gostaria de remover o cliente ' + cliente.name + ' ?')) {
				ClienteService.remove(cliente._id).then(
					function(response) {
						vm.success = response.data;
						vm.findAll();
					},
					function(error) {
						console.log(error);
						vm.error = error.data;
					});
			}
		};



	}
})();