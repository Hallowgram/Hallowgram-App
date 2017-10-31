var bCrypt = require('bcrypt');

var User = require("../../db").users;
  
var LocalStrategy = require('passport-local').Strategy;
module.exports = function(passport) {
    
    // console.log('hello');

 
 
    
    passport.serializeUser(function(user, done) {
                    console.log('serializing user')

                     done(null, user.id);
 
    });

    passport.use('local-signup', new LocalStrategy(
 
        {
 
            usernameField: 'email',
 
            passwordField: 'password',
 
            passReqToCallback: true // allows us to pass back the entire request to the callback
 
        },
 
 
 
        function(req, email, password, done) {

            var generateHash = function(password) {
 
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
 
            };
 
 
 
            User.findOne({
                where: {
                    email: email
                }
            }).then(function(user) {
 
                if (user)
 
                {
 
                    return done(null, false, {
                        message: 'That email is already taken'
                    });
 
                } else
 
                {
 
                    var userPassword = generateHash(password);
 
                    var data =
 
                        {
                            username: req.body.username,

                            email: email,
 
                            password: userPassword,
 
                            firstname: req.body.firstname,
 
                            lastname: req.body.lastname
 
                        };
 
                    User.create(data).then(function(newUser, created) {
 
                        if (!newUser) {
 
                            return done(null, false);
 
                        }
 
                        if (newUser) {
 
                            return done(null, newUser);
 
                        }
 
                    });
 
                }
 
            });
            
            
            passport.deserializeUser(function(id, done) {
 
                User.findById(id).then(function(user) {
             
                    if (user) {
             
                        done(null, user.get());
             
                    } else {
             
                        done(user.errors, null);
             
                    }
             
                });
 
            });
        }));
            
// **************************************************************************************************
// **************************************************************************************************
// Signin
// **************************************************************************************************

        passport.use('local-login', new LocalStrategy(
         
            {
         
                // by default, local strategy uses username and password, we will override with email
         
                usernameField: 'email',
         
                passwordField: 'password',
         
                // passReqToCallback: true // allows us to pass back the entire request to the callback
         
            },
         
         
            function(email, userpassword, done) {

                // console.log(email);
         
                var isValidPassword = function(userpassword,databasepassword) {
                    console.log(databasepassword, userpassword);
                    return bCrypt.compareSync(userpassword, databasepassword)
                    
                }
                
                User.findOne({
                    where: {
                        email: email
                    }
                }).then(function(user) {
                    if (!user) {
         
                        return done(null, false, {
                            message: 'Email does not exist'
                        });
         
                    }

                    // console.log(isValidPassword(userpass, password));
                    if (!isValidPassword(userpassword, user.dataValues.password)) {
         
                        return done(null, false, {
                            message: 'Incorrect password.'
                        });
         
                    }
                    passport.deserializeUser(function(id, done) {
                 
                                User.findById(id).then(function(user) {
                             
                                    if (user) {
                             
                                        done(null, user.get());
                             
                                    } else {
                             
                                        done(user.errors, null);
                             
                                    }
                             
                                });                                
                 
                            });
         
                    var userinfo = user.get();
                    // // console.log(userInfo)
                    return done(null, userinfo);
                
         
         
                }).catch(function(err) {
         
                    console.log("Error:", err);
         
                    return done(null, false, {
                        message: 'Something went wrong with your Signin'
                    });
         
                });
         
         
            }
         
        ));
 
        }
  