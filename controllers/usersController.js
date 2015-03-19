/**
 * Created by alex on 3/18/15.
 */
var User = require("../lib/user");
var users = require("../lib/users");

module.exports = {
    getAction: function (request, response, next) {
        response.end(JSON.stringify(users.getUsers()));
    },

    postAction: function (request, response, next) {
        request.on('data', function (data) {
            try {
                var jsonObj = JSON.parse(data);
                var user = new User(jsonObj.name, jsonObj.email, jsonObj.description, jsonObj.age);
                users.saveUser(user);
                response.statusCode = 200;
                response.end("ok");
            } catch (e) {
                console.log("something happened");
                response.statusCode = 500;
                response.end("Bad request");
            }
        });
    }
};