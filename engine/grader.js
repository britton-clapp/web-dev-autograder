const {parse_rubric} = require("./rubric");
const {contains_element} = require("../rules/html/contains_element");
const {contains_x_of_group} = require("../rules/html/contains_x_of_group");

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
    for (let [name, rule] of Object.entries(rules.rules)) {
        let result = check_rule(map_rule_to_function(name, rule, submission));
    }
    return response;
}

function check_rule(rule, submission) {
    return true;
}

function map_rule_to_function(name, rule, submission) {
    let matches = rule.rule.match(/([0-9]*) ([a-z0-9]*) elements?/);
    if (matches) {
        const result = contains_element(submission, matches[2], matches[1])
        const score = result ? rule.score : 0;
        // result = check_rule();
    }

    matches = rule.rule.match(/([0-9]*)\+ ([a-z0-9]*) elements?/);
    if (matches) {
        const result = contains_x_of_group(submission, matches[2], [matches[1]])
        const score = result ? rule.score : 0;
        // result = check_rule();
    }

    return score;
}

exports.grade = grade;
exports.check_rules = check_rules;
