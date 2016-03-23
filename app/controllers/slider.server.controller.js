



exports.read = function(req, res) {
    res.json(req.slider);
}



exports.projectByID = function(req, res, next, id) {
    res.render('slider',{
        title: id,
        pactive: "active"
    }) 
    
};

