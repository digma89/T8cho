/*--By Diego Rodriguez 2/13/16
    Title: Personal portafolio */

//set the title of my new page for routes
exports.render = function(req, res) {
    res.render('contact',{
        title: "Contacto",
        pactive: "active"
    }) 
    
};

