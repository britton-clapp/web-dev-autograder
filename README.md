# Web Dev Autograder
A framework for automatically grading Web Development coursework.

The autograder takes a rubric, defined in YAML, and a submission, which is a file in the local filesystem. Here's an example run:
```
node grade.js -r sample_assignments/just_one_h1.yml -s sample_assignments/just_one_h1.html
```

Rubrics are designed to be human-readable.

A submission is the object being graded. At present we only support single-file submissions, but this will be expanded 
to include git repositories, local folders, and zip files.