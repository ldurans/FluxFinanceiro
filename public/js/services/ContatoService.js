angular.module('flux').factory('Contato', function($resource) {
	
	return $resource('/contatos/:id');
});