const Profile = require("./profile.js");
const renderer = require('./renderer');



    function home(request, response) {
        if (request.url === "/") {
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            renderer.view("header", {}, response);
            response.end("Footer\n");
        }

    }

    function user(request, response) {

        const username = request.url.replace("/", "");
        if(username.length > 0) {
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.write("Header\n");

            const studentProfile = new Profile(username);

            studentProfile.on("end", function (profileJSON) {

                const values = {
                    avatarUrl:profileJSON.gravatar_url,
                    username:profileJSON.profile_name,
                    badges:profileJSON.badges.length,
                    javascriptPoints:profileJSON.points.JavaScript,
                }

                response.write(
                    values.username
                    + " has "
                    + values.badges
                    + " badges\n"
                );


                response.end("Footer\n");

            });

            studentProfile.on("error", function (error) {

                response.write(error.message + "\n");
                response.end("Footer\n");

            });
        }
    }

    module.exports.home = home;
    module.exports.user = user;