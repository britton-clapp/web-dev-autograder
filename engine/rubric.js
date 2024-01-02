const yaml = require('js-yaml');
const fs   = require('fs');
const {ValidationError} = require("../exceptions/validation_error");

function parse_rubric(rubric_file_path) {
    function onWarning(exception) {
        console.log(exception);
    }

    // @TODO: Need to allow rules to be grouped into sections!

    let rules = []; // @TODO: This needs to be a `rules` object

    rules = yaml.load(fs.readFileSync(rubric_file_path, 'utf8'), {onWarning: onWarning});
    if (!rules || !rules.description) {
        throw new ValidationError();
    }
    return rules;
}

exports.parse_rubric = parse_rubric;
