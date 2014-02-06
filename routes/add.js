var data = require("../data.json");

exports.addFriend = function(req, res) {    
    var friend = {
        "imgURL": "http://lorempixel.com/400/400/people",
        "name" : req.query.name,
        "description" : req.query.description
    };
    data['friends'].push(friend);
    res.render('add', friend);

     }