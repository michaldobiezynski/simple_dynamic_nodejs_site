
const fs = require('fs');

    function view(templateName, values, response) {

    const fileContents = fs.readFileSync('./views/' + templateName + '.html');

            response.write(fileContents);

    }

    module.exports.view = view;