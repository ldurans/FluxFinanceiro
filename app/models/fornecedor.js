/**
 * Created by Lumardyelson on 13/03/2015.
 */
var mongoose = require('mongoose');

module.exports = function() {
    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        cnpj: {
            type: String,
            required: true
        },
        fantasia: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        },
        telefone: {
            type: String

        }
    },
    {collection: 'fornecedores'}
    );

    //O primerio parametro é referente a collection
    return mongoose.model('Fornecedor', schema,'fornecedores');
};