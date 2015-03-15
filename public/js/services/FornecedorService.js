angular.module('flux').factory('Fornecedor', function($resource) {
	
	return $resource('/fornecedores/:id');
});