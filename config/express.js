var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var helmet = require('helmet');


module.exports = function() {

  var app = express();
  
  app.set('port', 3000);

  app.set('view engine', 'ejs');
  app.set('views','./app/views');
  app.use(express.static('./public'));
  // novos middlewares
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(require('method-override')());

  app.use(cookieParser());
  app.use(session(
    { secret: 'homem avestruz', 
      resave: true, 
      saveUninitialized: true 
    }
  ));
    app.use(passport.initialize());
    app.use(passport.session());
    //app.use(helmet());

    // imediatamente após a inicialização da sessão do Passport
    app.disable('x-powered-by');

    // evitando possíveis ataques do tipo clickjacking.
    app.use(helmet.xframe());

    // Filtro XSS - evitando tags script indevidas
    app.use(helmet.xssFilter());

    // Não permitir que o browser infira o MIME Type
    app.use(helmet.nosniff());



    load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes/auth.js')
    .then('routes')
    .into(app);

    // se nenhum rota atender, direciona para página 404
    app.get('*', function(req, res) {
        res.status(404).render('404');
    });


return app;
};