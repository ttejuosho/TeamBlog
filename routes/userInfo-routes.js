var db = require("../models");

module.exports = function(app) {

    // Get User Info from API
    app.get('/api/userinfo/:id', function(req, res){
        db.UserInfo.findAll({
            where: {
                id: req.params.id
            },
        }).then(function(dbUserInfo){
            res.json(dbUserInfo);
        });
    });

    // Post User Info to API
    app.post('/api/userinfo/:id', function(req, res){
        db.UserInfo.create({
            UserInfo: 'TBD',
            UserId: req.params.id
        }).then(function(dbUserInfo){
            res.json(dbUserInfo);
        });
    });

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