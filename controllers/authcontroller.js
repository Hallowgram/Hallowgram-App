var exports = module.exports = {}
 
exports.signup = function(req, res) {
 
    res.render('sign-up');
 
}

exports.signin = function(req, res) {
 
    res.render('login');
 
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
        if(err){throw err}
        res.redirect('/');
 
    });
 
}