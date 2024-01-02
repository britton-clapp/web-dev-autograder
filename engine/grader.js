const {parse_rubric} = require("./rubric");
const {contains_element} = require("../rules/html/contains_element");
const {contains_x_of_group} = require("../rules/html/contains_x_of_group");
const yaml = require("js-yaml");
const fs = require("fs");

function grade(rubric_file_path, submission_path) {
    const rules = parse_rubric(rubric_file_path);
    const submission = load_submission(submission_path);
    const response = check_rules(rules, submission);
    return response;
}

function load_submission(submission_path) {
    let submission_text = fs.readFileSync(submission_path, 'utf8');
    return submission_text;
}

function check_rules(rules, submission) {
    let response = {};

    // @TODO: Auto-fail if rules is not an array of objects
    response.rules = rules;
    response.score = 0;

    for (let [name, rule] of Object.entries(rules.rules)) {
        // @TODO: Result object should have everything we need for output:
        // - rules
        // - score
        // - submitter id?
        let result = map_rule_to_function(name, rule, submission);
        response.score += Number(result);

    }
    return response;
}

function check_rule(rule, submission) {
    return true;
}

function map_rule_to_function(name, rule, submission) {
    let score = 0;

    // Convert human-readable "points" to a number. Modify the following to allow for something other than "points".
    let numericValue = rule.value.replace(/ points?/, '');
    let matches = rule.rule.match(/([0-9]*) ([a-z0-9]*) elements?/);
    if (matches) {
        const result = contains_element(submission, matches[2], matches[1])
        score = result ? numericValue : 0;
        // result = check_rule();
    }

    matches = rule.rule.match(/([0-9]*)\+ ([a-z0-9]*) elements?/);
    if (matches) {
        const result = contains_x_of_group(submission, matches[2], [matches[1]])
        score = result ? rule.score : 0;
        // result = check_rule();
    }

    return score;
}

exports.grade = grade;
exports.check_rules = check_rules;
