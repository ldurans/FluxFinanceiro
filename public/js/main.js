angular.module('flux',['ngRoute', 'ngResource'])
  .config(function($routeProvider, $httpProvider) {

    $httpProvider.interceptors.push('meuInterceptor');

    $routeProvider.when('/contatos', {
      templateUrl: 'partials/contatos.html',
      controller: 'ContatosController'
    });

    $routeProvider.when('/contato/:contatoId', {
    	templateUrl: 'partials/contato.html', 
    	controller: 'ContatoController'
    });

    $routeProvider.when('/contato', {
      templateUrl: 'partials/contato.html',
      controller: 'ContatoController'
    });

    $routeProvider.when('/fornecedores', {
      templateUrl: 'partials/fornecedores.html',
      controller: 'FornecedoresController'
    });

    $routeProvider.when('/fornecedor/:fornecedorId', {
      templateUrl: 'partials/fornecedor.html',
      controller: 'FornecedorController'
    });

    $routeProvider.when('/fornecedor', {
      templateUrl: 'partials/fornecedor.html',
      controller: 'FornecedorController'
    });


    $routeProvider.when('/auth', {
      templateUrl: 'partials/auth.ejs'
    });

    $routeProvider.otherwise({redirectTo: '/fornecedores'});
});