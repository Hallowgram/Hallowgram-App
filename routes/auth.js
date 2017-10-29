var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {

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

        if (req.isAuthenticated())

            return next();

        res.redirect('/login');

    }
    app.get('/profile', isLoggedIn, authController.profile);
    // ***********************************************************************    
    app.get('/logout', authController.logout);

}