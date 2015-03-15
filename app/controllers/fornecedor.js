
var sanitize = require('mongo-sanitize');


module.exports = function (app) {

    var Fornecedor = app.models.fornecedor;
    var controller = {};

    controller.listaFornecedores = function(req, res) {

        Fornecedor.find()
            .then(
            function(fornecedores) {
                res.json(fornecedores);
                console.log(fornecedores);

            },
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.obtemFornecedor = function(req, res) {

        var _id = req.params.id;
        Fornecedor.findById(_id).exec()
            .then(
            function(fornecedor) {
                if (!fornecedor) throw new Error("Contato não encontrado");
                res.json(fornecedor)
            },
            function(erro) {
                console.log(erro);
                res.status(404).json(erro)
            }
        );
    };

    controller.removeFornecedor = function(req, res) {

        var _id = sanitize(req.params.id);
        Fornecedor.remove({"_id" : _id}).exec()
            .then(
            function() {
                res.end();
            },
            function(erro) {
                return console.error(erro);
            }
        );
    };

    controller.salvaFornecedor = function(req, res) {
        var _id = req.body._id;


        /* Independente da quantidade de parametros,
         sempre selecionamos somente o nome, email e emergencia*/
        var dados = {
            "nome": req.body.nome,
            "cnpj": req.body.cnpj,
            "fantasia": req.body.fantasia,
            "email": req.body.email,
            "telefone": req.body.telefone || null
        };

        if(_id) {
            Fornecedor.findByIdAndUpdate(_id, dados).exec()
                .then(
                function(fornecedor) {
                    res.json(fornecedor);
                },
                function(erro) {
                    console.error(erro);
                    res.status(500).json(erro);
                }
            );
        } else {
            Fornecedor.create(dados)
                .then(
                function(fornecedor) {
                    res.status(201).json(fornecedor);
                },
                function(erro) {
                    console.log(erro);
                    res.status(500).json(erro);
                }
            );
        }
    };
    return controller;
};