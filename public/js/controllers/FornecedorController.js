angular.module('flux').controller('FornecedorController',
    function($scope, Fonecedor, $routeParams) {

        if($routeParams.fonecedorId) {
            Contato.get({id: $routeParams.fornecedorId},
                function(fornecedor) {
                    $scope.fornecedor = fornecedor;
                },
                function(erro) {
                    $scope.mensagem = {
                        texto: 'Contato não existe. Novo contato.'
                    };
                }
            );
        } else {
            $scope.fornecedor = new Fornecedor();
        }


        $scope.salva = function() {
            $scope.fornecedor.$save()
                .then(function() {
                    $scope.mensagem = {texto: 'Salvo com sucesso'};
                    // limpa o formulário
                    $scope.fornecedor = new Fornecedor();
                })
                .catch(function(erro) {
                    $scope.mensagem = {texto: 'Não foi possível salvar'};
                });
        };

        Contato.query(function(fornecedores) {
            $scope.fornecedores = fornecedores;
        });
    });