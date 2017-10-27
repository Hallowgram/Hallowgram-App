
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Pic = require(__dirname+"/models/pic")
var User = require(__dirname+"/models/user")
var env = require('dotenv').load();
var models = require("./db");//gets index.js by default

var passport = require('passport')
var session = require('express-session')


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// For Passport
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

var authRoute = require(__dirname+"/routes/auth.js")(app,passport);
require(__dirname +'/config/passport/passport.js')(passport, models.users);

models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});


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