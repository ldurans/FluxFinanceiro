angular.module('flux').controller('FornecedoresController',
    function(Fornecedor,$scope){
        $scope.fornecedores = [];
        $scope.filtro = '';
        $scope.mensagem = {texto: ''};

        function buscaFornecedores(){
            Fornecedor.query(
                function(fornecedores){
                    $scope.fornecedores = fornecedores;
                    $scope.mensagem = {};
                },
                function(erro){
                    console.log(erro);
                    $scope.mensagem = {
                        texto: 'Não possivel listar as Pessoas Jurídicas!'
                    };
                }
             );
        }

    }

);