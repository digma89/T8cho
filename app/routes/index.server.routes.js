

//bring the render from the controller
module.exports = function(app){
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);
    
    var contact = require('../controllers/contact.server.controller');
    app.post('/contacto',contact.sendMail);
    
    var home = require('../controllers/home.server.controller');
    app.get('/home', home.render);
 
};

