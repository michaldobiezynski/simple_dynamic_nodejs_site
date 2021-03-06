
const fs = require('fs');

    function mergeValues(values, content) {

        for(let key in values) {
            content = content.replace(`{{${key}}}`, values[key]);
        }

        return content;

    }

    function view(templateName, values, response) {

    let fileContents = fs.readFileSync('./views/' + templateName + '.html',
                            'utf8');

        fileContents = mergeValues(values, fileContents);

            response.write(fileContents);

    }

    module.exports.view = view;