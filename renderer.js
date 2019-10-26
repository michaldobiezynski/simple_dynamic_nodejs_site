
const fs = require('fs');

    function view(templateName, values, response) {
    fs.readFile('./views/' + templateName + '/html',
        function (error, fileContents) {
        if(error) throw error;


            response.write(fileContents);
        })

    }

    module.exports.view = view;