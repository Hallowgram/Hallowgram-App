var authController = require('../controllers/authcontroller.js');


module.exports = function(app, passport, models) {

    app.get('/signup', authController.signup);
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile',

        failureRedirect: '/signup'
    }));


    // ***********************************************************************
    app.get('/login', authController.signin);

    app.post('/login',
        passport.authenticate('local-login', {
            successRedirect: '/profile',
            failureRedirect: '/signup'
        })
    );

    // app.post('/login', function(req, res, next) {

    //     passport.authenticate('local-login', function(err, user) {

    //         if (err) {
    //             return next(err); // will generate a 500 error
    //         }

    //         if (!user) {
    //             return next({ error : true});
    //         }

    //         req.login(user, function(loginErr) {
    //             if (loginErr) {
    //                 return next(loginErr);
    //             }
    //             return res.json({
    //                 email: user.email,
    //                 id: user.id,
    //                 token: user.token
    //             });
    //         });
    //     });
    // });

    // *********************************************************************** 
    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated()){
            return next();
        }

        res.redirect('/login');
    }
    app.get('/profile', isLoggedIn, function(req,res){

        // console.log('this is the body   ', req.user)
        // console.log('this is id ', req.user.id)
        
        models.pics.findAll({where: {userId:req.user.id}}).then(function(data){
            var links = data.map(function(dataValues){
                return dataValues.url;
            });
        
             res.render('profile',{imageUrls:links});
            
        });
    });
// ***********************************************************************    
    app.get('/logout', authController.logout);
    
// ***********************************************************************     
app.get('/newsfeed', isLoggedIn, function(req,res){
        
        models.pics.findAll({include: [{model: models.users}]}).then(function(data){
            
            var imgDetailsArr = data.map(function(dataValues){
                // console.log('this is my data', dataValues.user)
                var links = {}
                 links.username = dataValues.user.username
                 links.id = dataValues.id;
                 links.url = dataValues.url;
                 return links;
            });
            
            return imgDetailsArr;
            
        }).then(function(imgDetailsArr){
            
            res.render('newsfeed',{imageData:imgDetailsArr});
        });
    });
    // app.get('/addComment', function(req, res){

    //     models.pics.find

    //     res.render('commentview')
    // })
};




