
//bring the render from the controller
module.exports = function(app){    
     var slider = require('../../app/controllers/slider.server.controller');
     app.route('/proyectos/:proyectoId')
            .get(slider.read)
    app.param('proyectoId', slider.projectByID);
};