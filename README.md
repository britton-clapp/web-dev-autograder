# Web Dev Autograder
A framework for automatically grading Web Development coursework.

The autograder takes a rubric, defined in YAML, and a submission, which is a file in the local filesystem. Here's an example run:
```
node grade.js -r sample_assignments/just_one_h1.yml -s sample_assignments/just_one_h1.html
```

Rubrics are intended to be human-readable. Eventually we may want a GUI to edit them, and will probably need a way to 
load them from Canvas and save them back as well.

A submission is the object being graded. At present we only support single-file submissions, but this will be expanded 
to include git repositories, local folders, and zip files.

## Tests

To run all tests, just run `npm test` from the command line. To run tests from a single file, run npm test followed by 
two dashes, and then the path to the file, like so: `npm test -- rules/css/implements_property.test.js`.