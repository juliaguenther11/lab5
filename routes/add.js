var data = require("../data.json");

exports.addFriend = function(req, res) {  
	var name= req.params.name;
	var description= req.query.description;  
	res.render('add', {"name": name, "description":description});
	data["friends"].push(newFriend);
	console.log(data);
 };