var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'))
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


var data ={
	id:1,
	src: "http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg",
	comments: ["comments 1", "comments 2", "comments 3"],
	likedBy: ['me','mike']
}

app.get('*', function(req, res){
	res.render('login'); //{pic: data}
})

app.post('/sign-up', function(req, res){
	res.send(req.body);
})

app.post('/login', function(req, res){
	res.send(req.body);
})

app.post('/profile', function(req, res) {
	res.render('profile');
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


var port = process.env.PORT || 3000;
app.listen(port,function(){
    console.log('listening at port ',port);
});