var authController = require('../controllers/authcontroller.js');
 
module.exports = function(app,passport) {
 
    app.get('/signup', authController.signup);
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile',
 
        failureRedirect: '/signup'
    }));
    
    
// ***********************************************************************
    app.get('/login', authController.signin);
    
    app.post('/login', passport.authenticate('local-signin', {
        successRedirect: '/profile',
 
        failureRedirect: '/login'
    }));
     
// *********************************************************************** 
    function isLoggedIn(req, res, next) {
         
        if (req.isAuthenticated())
         
            return next();
             
        res.redirect('/login');
         
    }
    app.get('/profile',isLoggedIn, authController.profile);
// ***********************************************************************    
    app.get('/logout',authController.logout);   

}