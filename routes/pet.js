var r = require('request').defaults({
    json: true
});

var redis = require('redis');

var client = redis.createClient(6379, '127.0.0.1');

module.exports = function(app) {

    /* Read */
    app.get('/type/cat/:id', function (req, res) {

        client.get(req.params.id, function(error, cat) {
            if (error) {throw error;};
            if (cat) {
                res.json(JSON.parse(cat));
            } else {
                r({uri: 'http://localhost:3000/cat/' + req.params.id}, function(error, response, body) {
                    if (error) {throw error;return};
                    if (!error && response.statusCode === 200) {
                        res.json(body);
                        //client.set(req.params.id, JSON.stringify(body), function (error) {
                        client.setex(req.params.id, 10, JSON.stringify(body), function (error) {
                            if (error) {throw error;};
                        });
                    } else {
                        res.send(response.statusCode);
                    }
                });
            }
        });

    });

    app.get('/type/:type', function(req, res){
        port = null;
        console.log("service request type: " + req.params.type);
        switch (req.params.type) {
            default: 
                port = 3002;
            case "cat":
                port = 3000;
                break;
            case "dog":
                port = 3003;
        }
        urlRequest = 'http://localhost:'+ port + '/' +req.params.type;
        console.log(urlRequest);
        if (port != 3002) {
            r({uri: urlRequest}, function(error, response, body){
                if (error) {throw error; return};
                if(!error && response.statusCode == 200){
                    res.json(body);
                } else{
                res.send(response.statusCode);
                }
            });
        }
    });

    app.get('/delay', function(req, res){
        console.log("simulate delay call");
        setTimeout(function(){
            res.json({info: 'simulate delay 10s'});
        }, 10000);
    });

    app.get('/ping', function(req, res){
        console.log("ping server");
        res.json({pong: Date.now()});
    });

};
