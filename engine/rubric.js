const yaml = require('js-yaml');
const fs   = require('fs');

function parse_rubric(rubric_file_path) {
    function onWarning(exception) {
        console.log(exception);
    }

    let rules = []; // @TODO: This needs to be a `rules` object

    rules = yaml.load(fs.readFileSync(rubric_file_path, 'utf8'), {onWarning: onWarning});
    if (!rules) {
        throw new Error(); // @TODO: Throw a custom exception here and handle it!
    }
    return rules;
}

exports.parse_rubric = parse_rubric;
