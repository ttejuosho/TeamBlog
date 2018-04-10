var db = require("../models");

module.exports = function(app) {

    // Get Users Info from DB
    app.get('/api/userinfo', function(req, res){
        db.UserInfo.findAll({}).then(function(dbUserInfo){
            res.json(dbUserInfo);
        });
    });

    app.get('/api/userinfo/:id', function(req,res){
        // Find One User by ID and return them in Json format 
            db.UserInfo.findOne({
                where: {
                    id: req.params.id
                }
            }).then(function(dbUserInfo){
                res.json(dbUserInfo);
            });
        });//end of getId function


        // Post User Info to API
    app.post('/api/userinfo', function(req, res){
        // Creates a User with available data
            console.log(req.body);
            db.UserInfo.create(req.body).then(function(dbUserInfo) {
                res.json(dbUserInfo);
            });
        }); //end of post route


       // Update User Info 
   app.put('/api/userinfo/:id', function(req, res){
    
            db.UserInfo.update(req.body,
            {
                where: {
                    UserId: req.params.id
                }
        }).then(function(dbUserInfo){
            res.json(dbUserInfo);
        });

        });


}