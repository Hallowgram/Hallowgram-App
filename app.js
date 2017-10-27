var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Pic = require(__dirname+"/models/pic")
var User = require(__dirname+"/models/user")
var env = require('dotenv').load();
var models = require("./db");//gets index.js by default
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());




models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});

app.get('/sign-up', function(req, res){
	res.render('sign-up')
})

app.post('/sign-up', function(req, res){
	
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
        	
        	res.redirect('/profile/' + user.dataValues.id)
        });
        
		
	})
})


app.get('/login', function(req, res){
	res.render('login')
})

app.post('/login', function(req, res){
	User.findAll({
	  where: {
	    email: req.body.email
	  }
	}).then(function(user){
		
		
		
		res.send(user)

		// res.redirect('/profile/' + user.id)
	})
})

app.get('/profile/:id', function(req, res){

	

		User.findById(req.params.id).then(function(row){
			
			res.render('profile', {info: row})

		})	
		

})

app.get('/profile', function(req, res) {
	res.render('profile');
})

app.post('/profile', function(req, res) {
	res.render('profile');
})

app.get('/addComment', function(req, res){
	res.render('commentview', {pic: data})
})

app.post('/addComment',function(req, res){
	console.log(req.body)
	data.comments.push(req.body.newComment);
	res.redirect('/')
})

app.post('/like',function(req, res){
	console.log('this is the user',req.body.user);
	var userindx = data.likedBy.indexOf(req.body.user);
	if(userindx === -1){

		data.likedBy.push(req.body.user);
	}else{
		data.likedBy.splice(userindx,1);
	}
})

app.get('/', function(req, res){
	res.render('login');
})

var port = process.env.PORT || 3000;

app.listen(port,function(){
    console.log('listening at port ',port);
}); 
