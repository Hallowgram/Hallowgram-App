var aws = require('aws-sdk'); //Amazon Web Services (to store photos)
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var multerS3 = require('multer-s3'); // Multer for AWS s3
var app = express();
var s3 = new aws.S3({ /* ... */ })
var Pic = require(__dirname + "/models/pic");
var User = require(__dirname + "/models/user");
var Like = require(__dirname + "/models/like");
var env = require('dotenv').load();
var models = require("./db"); //gets index.js by default

var passport = require('passport')
var session = require('express-session')


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// For Passport
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

require(__dirname + '/config/passport/passport.js')(passport, models.users);
require(__dirname + "/routes/auth.js")(app, passport, models);

models.sequelize.sync().then(function() {

    console.log('Nice! Database looks fine')

}).catch(function(err) {

    console.log(err, "Something went wrong with the Database Update!")

});

/* 
Multer - Upload Storage and File Destination  
*/
// var localStorage = multer.diskStorage({

//     destination: function(request, file, callback) {
//         callback(null, __dirname + "/static/images/multerUploads");

//     },
//     filename: function(req, file, callback) {
//         callback(null, Date.now() + file.originalname);

//     }
// });

var uploadAWS = multer({ 
    storage: multerS3({
        s3: s3,
        bucket: 'hallowgram',
        metadata: function (req, file, cb) {
            cb(null, {fileName: file.originalname});
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString())
        }
    }) 
}).single('myFile');

app.post("/profile/upload", function(req, res, next) {



    uploadAWS(req, res, function(err) {
        if (err) {
            return res.send("Error Uploading File!")
        }
        models.pics.sync().then(function() {
            models.pics.create({
                userId: req.user.id,
                url: "../images/multerUploads/" + req.file.filename,
                name: req.body.name,
                description: req.body.description
            });

            console.log('Successfully uploaded ' + req.file.filename);
            res.redirect('/profile')

        });
    });
})


app.get('/newsfeed', function(req, res) {
    res.render('newsfeed')
})


app.get('/addComment/:picId', function(req, res) {
    models.pics.sync().then(function() {
        models.pics.findAll({
            where: {
                id: req.params.picId
            },
            include: [{
                    model: models.users
                },

                {
                    model: models.likes
                },

                {
                    model: models.comments
                }
            ]
        }).then(function(data) {
            var links = data.map(function(dataValues) { // put results into array dataValues
                return dataValues.url;
            });

            var commentId = data.map(function(datavalues) {
                return data[0].dataValues.comments
            })
            var userId = data[0].dataValues.userId;
            var userName = data[0].dataValues.user.username;
            var picId = data[0].dataValues.id;
            var likeId = data[0].dataValues.likes.length;
            res.render('commentview', { imageUrls: links, imageId: picId, userId: userId, userName: userName, likeId: likeId, commentId: commentId });
        })

    });
})

app.post('/addComment/:picId', function(req, res) {
    var userId = req.body.userId;
    var picId = req.body.picId;
    models.comments.findAll({
        where: {
            userId: userId,
            picId: picId
        }
    }).then(function(rows) {
        models.comments.create({
            text: req.body.newComment,
            userId: req.user.id,
            picId: req.params.picId
        }).then(function() {
            console.log('.....COMMENT ROW CREATED......')
            res.redirect('/addComment/' + req.params.picId);
        }).catch(function(err) {
            if (err) {
                throw err;
            }
        })

    })
})





app.post('/like', function(req, res) {
    var userId = req._passport.session.user;
    var picId = req.body.picId;
    models.likes.findAll({
        where: {
            userId: userId,
            picId: picId
        }
    }).then(function(rows) {

        if (rows.length) {
            // if(userId == rows[0].userId && picId == rows[0].picId){
            models.likes.destroy({
                where: {
                    userId: req._passport.session.user,
                    picId: req.body.picId
                }
            }).then(function() {
                console.log('***Destroyed rows!***');
                res.redirect('/addComment/' + req.body.picId);
            }).catch(function(err) {
                if (err) {
                    throw err;
                }
            })

        } else {
            models.likes.create({
                userId: req._passport.session.user,
                picId: req.body.picId
            }).then(function() {
                console.log('***Created rows!***')
                res.redirect('/addComment/' + req.body.picId);
            }).catch(function(err) {
                if (err) {
                    throw err;
                }
            })
        }

    })
})


app.get('/', function(req, res) {
    req.session.destroy();
    res.render('login');
})

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('listening at port ', port);
});

