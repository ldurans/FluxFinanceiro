var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

// ObjectID de algum contato existente
var _idProcurado = new ObjectID('5503899a39b16584ae426626');

MongoClient.connect('mongodb://127.0.0.1:27017/flux',
	function(erro, db) {
		if(erro) throw err;		
		db.collection('fornecedores').findOne({_id : _idProcurado},
			function(erro, contato) {
				if(erro) throw err;
				console.log(contato);
			}
		);	
	}
);