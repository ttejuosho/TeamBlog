var path = require('path');

module.exports = function(app){

    app.get('/', function(req,res){
        res.sendFile(path.join(__dirname, '/../public/team.html'))
    })

    app.get('/generate', function(req,res){
        res.sendFile(path.join(__dirname, '/../public/output.html'))
    })

     app.get('/signin', function(req,res){
        res.sendFile(path.join(__dirname, '/../public/signin.html'))
    })

}