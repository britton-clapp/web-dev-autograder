const commander = require('commander');
const grader = require("engine/grader")

commander
    .version('0.0.0', '-v, --version')
    .usage('[OPTIONS]...')
    // .option('-r, --rubric', 'Detects if the rubric is present.')
    .option('-r, --rubric <value>', 'Overwriting value.', null)
    .option('-s, --submission <value>', 'Overwriting value.', null)
    .parse(process.argv);

const options = commander.opts();

const rubric = (options.rubric ? 'Rubric is present.' : 'Rubric is not present.');
const submission = (options.submission ? 'Submission is present.' : 'Submission is not present.');

console.log('Rubric:', `${options.rubric}`);
console.log('Submission:', `${options.submission}`);

const results = grader.grade(rubric, submission);