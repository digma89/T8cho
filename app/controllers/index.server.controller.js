

//set the title of my new page for routes
exports.render = function(req, res) {
    res.render('index',{
        title: "Home",
        pactive: "active"
    })

};
