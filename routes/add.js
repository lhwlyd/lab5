var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	var name = req.query.name;
	var des = req.query.description;
	var imageURL = 'http://lorempixel.com/400/400/people';

	data.friends.push({"name":name, "description":des, "imageURL":imageURL});
	res.render('index', data);
 }