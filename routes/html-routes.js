var path = require('path');

module.exports = function(app){

    app.get('/', function(req,res){
        res.sendFile(path.join(__dirname, '/../public/team.html'));
    });

    app.get('/member', function(req,res){
        res.sendFile(path.join(__dirname, '/../public/member.html'));
    });

    app.get('/register', function(req,res){
        res.sendFile(path.join(__dirname, '/../public/register.html'));
    });

    app.get('/signup', function(req,res){
        res.sendFile(path.join(__dirname, '/../public/signup.html'));
    });

     app.get('/signin', function(req,res){
        res.sendFile(path.join(__dirname, '/../public/signin.html'));
    });

    app.get('/meeting', function(req,res){
        res.sendFile(path.join(__dirname, '/../public/meeting.html'));
    });
};