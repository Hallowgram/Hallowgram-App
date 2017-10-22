var express = require('express');

var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({extended:false}));


var data ={
	id:1,
	src: "http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg",
	comments: ["comments 1", "comments 2", "comments 3"]
}

app.get('*', function(req, res){
	res.render('commentview', {pic: data})
})

var port = process.env.PORT || 3000;
app.listen(port,function(){
    console.log('listening at port ',port);
});