
//bring the render from the controller
module.exports = function(app){
    var contact = require('../controllers/contact.server.controller');
    app.get('/contacto', contact.render);
};



