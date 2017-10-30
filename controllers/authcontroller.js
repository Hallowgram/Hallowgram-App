var exports = module.exports = {}
 
exports.signup = function(req, res) {
 
    res.render('sign-up');
 
}

exports.signin = function(req, res) {
 
    res.render('login');
 
}
exports.profile = function(req, res) {
 
    res.render('profile');
 
}



exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
        
        res.redirect('/');
 
    });
 
}