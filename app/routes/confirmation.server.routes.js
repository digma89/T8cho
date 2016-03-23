

//bring the render from the controller
module.exports = function(app){
    var confirmation = require('../controllers/confirmation.server.controller');    
    //retrive post method from form
    app.post('/confirmation', confirmation.contactForm);
};