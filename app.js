var express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");
var app = express();
var Pic = require(__dirname+"/models/pic");
var User = require(__dirname+"/models/user");
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());




// var data ={
//     id:1,
//     name: "Michael",
//     description: "testing testting 1234546",
//     src: "http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg",
//     comments: ["comments 1", "comments 2", "comments 3"],
//     likedBy: ["me","mike"]
// };

app.get("/sign-up", function(req, res){
    res.render("sign-up");
});

app.post("/sign-up", function(req, res){
    User.sync().then(function(){
        User.create({
            email: req.body.email,
            firstname: req.body.firstName,
            lastname: req.body.lastName,
            username: req.body.email,
            password: req.body.password,
            createdAt: 11/18/17,
            updatedAt: 11/18/17
        }).then(function(user){
            res.redirect("/profile/" + user.dataValues.id);
        });
    });
});


app.get("/login", function(req, res){
    res.render("login");
});

app.post("/login", function(req, res){
    User.findAll({
      where: {
        email: req.body.email
      }
	}).then(function(user){
		res.send(user);

		// res.redirect('/profile/' + user.id)
	});
});

app.get("/profile/:id", function(req, res){

		User.findById(req.params.id).then(function(row){
			
			res.render("profile", {info: row});

		});			
});

app.get("/profile", function(req, res) {
	res.render("profile");
});

app.post("/profile", function(req, res) {
	res.render("profile");
});


/* 
Multer - Upload Storage and File Destination  
*/
var photoStorage = multer.diskStorage({
	destination: function(request, file, callback) {
		callback(null, __dirname + "/static/images/uploads");
	},
	filename: function(request, file, callback){
		// console.log(file.originalname)
		callback(null, Date.now() + file.originalname);

	}
});


app.post("/profile/upload", function(request, response) {
	var photoUpload = multer({storage : photoStorage}).single('myFile');
	photoUpload(request, response, function(err){
		if(err){
			return response.end("Error Uploading File!")
		}
		response.end("File is uploaded! :)")
	});
	Pic.findById(request.params.id).then(function(row){

			console.log(request.file);	
			// response.send('"profile", {info: row}');

		});	
});



app.get("/addComment", function(req, res){
	res.render("commentview", {pic: data});
});

app.post("/addComment",function(req, res){
	// console.log(req.body);
	data.comments.push(req.body.newComment);
	res.redirect("/");
});

app.post("/like",function(req, res){
	// console.log("this is the user",req.body.user);
	var userindx = data.likedBy.indexOf(req.body.user);
	if(userindx === -1){

		data.likedBy.push(req.body.user);
	} else {
		data.likedBy.splice(userindx,1);
	};
});

app.get("/", function(req, res){
	res.render("login");
});

var port = process.env.PORT || 3000;

app.listen(port,function(){
    console.log("listening at port ",port);
}); 
