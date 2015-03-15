/**
 * Created by Lumardyelson on 13/03/2015.
 */

function verificaAutenticacao(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.status('401').json('Não autorizado');
    }
}

module.exports = function (app){
    var controller = app.controllers.fornecedor;

    app.route('/fonecedores')
        .get(verificaAutenticacao, controller.listaFornecedores)
        .post(verificaAutenticacao, controller.salvaFornecedor)

   app.route('/contatos:id')
        .get(verificaAutenticacao,controller.obtemFornecedor)
        .delete(verificaAutenticacao,controller.removeFornecedor)
};