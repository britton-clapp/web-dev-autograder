const {parse_rubric} = require("./rubric");

function grade(rubric_file_path, submission) {
    const rules = parse_rubric(rubric_file_path);
    const response = check_rules(rules, submission);
    // @TODO: Handle Junit?
    return response;
}

function check_rules(rules, submission) {
    let response = {};
    // @TODO: Auto-fail if rules is not an array of objects

    // @TODO: Iterate over rules
    return response;
}

exports.grade = grade;
