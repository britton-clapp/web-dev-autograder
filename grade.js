const commander = require('commander');
const grader = require("./engine/grader")

commander
    .version('0.0.0', '-v, --version')
    .usage('[OPTIONS]...')
    .option('-r, --rubric <value>', 'Overwriting value.', null)
    .option('-s, --submission <value>', 'Overwriting value.', null)
    .parse(process.argv);

const options = commander.opts();

const rubric = options.rubric;
const submission = options.submission;

if (!rubric || !submission) {
    console.log("Rubric (--rubric) and submission (--submission) are both required.");
    process.exit(1);
}

console.log('Rubric:', `${options.rubric}`);
console.log('Submission:', `${options.submission}`);

const results = grader.grade(rubric, submission);


// @TODO: Display results. Is this where JUNIT output goes?
console.log(JSON.stringify(results, null, 4));
