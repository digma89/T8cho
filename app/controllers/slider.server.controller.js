



exports.read = function(req, res) {
    res.json(req.slider);
}



exports.projectByID = function(req, res, next, id) {
    res.render('slider',{
        title: "Proyectos",
        pactive: "active",
        id: id
    }) 
    
};

