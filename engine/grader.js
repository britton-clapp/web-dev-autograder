const {parse_rubric} = require("./rubric");
const {contains_element} = require("../rules/html/contains_element");
const {contains_x_of_group} = require("../rules/html/contains_x_of_group");
const yaml = require("js-yaml");
const fs = require("fs");
const Evaluation = require("./evaluation");
const {contains_string, does_not_contain_string} = require("../rules/generic/contains_string");
const {matches_regex, does_not_match_regex} = require("../rules/generic/matches_regex");

/**
 * Grades a submission based on a rubric.
 *
 * This is the main entry point to the autograder.
 *
 * @param rubric_file_path
 * @param submission_path
 * @returns {{score: number, rules}}
 */
function grade(rubric_file_path, submission_path) {
    const rules = parse_rubric(rubric_file_path);
    const submission = load_submission(submission_path);
    const response = check_rules(rules, submission);
    return response;
}

/**
 * Takes a submission and loads it into memory.
 * @param submission_path
 * @returns {string}
 */
function load_submission(submission_path) {
    // @TODO: Clone a git repo?
    // @TODO: Download from a URL without changing domains?

    // @TODO: Rework this to handle multiple files.
    let submission_text = fs.readFileSync(submission_path, 'utf8');
    return submission_text;
}

/**
 * Iterates over a series of rules and checks them against a submission.
 * @param rules
 * @param submission
 * @returns {{score: number, rules}}
 */
function check_rules(rules, submission) {
    // let response = new Evaluation(); // @TODO: Add rules and submission to evaluation object?

    let response = {
        score: 0,
        rules: rules,
    };
    if (rules.constructor !== Object) {
        response.errors = ["Rules is not an object."];
        response.score = null; // We did not evaluate any rules, so no valid score.
        return response;
    }
    // @TODO: Auto-fail if rules array contains something that is not an object.

    for (let [name, rule] of Object.entries(rules.rules)) {
        // @TODO: Result object should have everything we need for output:
        // - submitter id?
        let result = map_rule_to_function(name, rule, submission);
        response.score += Number(result);

    }
    return response;
}

/**
 * Checks a submission against a single rule.
 *
 * @TODO: Should probably return an integer.
 * @TODO: Should we support floats?
 * @TODO: Should the score be added directly to the result object?
 * @param rule
 * @param submission
 * @returns {boolean}
 */
function check_rule(rule, submission) {
    return true;
}

/**
 * Parses a human-readable rule from a rubric and maps it to a function that evaluates the rule.
 * @param name
 * @param rule
 * @param submission
 * @returns {number}
 */
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
        score = result ? numericValue : 0;
        // result = check_rule();
    }

    matches = rule.rule.match(/contains string \/(.*)\//);
    if (matches) {
        const result = contains_string(submission, matches[2])
        score = result ? numericValue : 0;
        // result = check_rule();
    }

    matches = rule.rule.match(/does not contain string \/(.*)\//);
    if (matches) {
        const result = does_not_contain_string(submission, matches[2])
        score = result ? numericValue : 0;
        // result = check_rule();
    }

    matches = rule.rule.match(/matches regex \/(.*)\//);
    if (matches) {
        const result = matches_regex(submission, matches[2])
        score = result ? numericValue : 0;
        // result = check_rule();
    }

    matches = rule.rule.match(/does not match regex \/(.*)\//);
    if (matches) {
        const result = does_not_match_regex(submission, matches[2])
        score = result ? numericValue : 0;
        // result = check_rule();
    }

    // @TODO: Need to account for an element that "meets requirements", where requirements is a list of n rules.

    return score;
}

exports.grade = grade;
exports.check_rules = check_rules;
