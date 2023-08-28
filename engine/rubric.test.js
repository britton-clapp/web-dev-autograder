const {expect, describe} = require("@jest/globals");
const rubric = require("./rubric");

describe('should parse a rubric into an object', () => {
    test('count single h1 element', () => {
        // const doc = yaml.load(fs.readFileSync('../sample_assignments/just_one_h1.yml', 'utf8'));
        const rules = rubric.parse_rubric('sample_assignments/just_one_h1.yml');
        const text = "<html><body><p>Fake text here.</p></body></html>";
        expect(rules).toEqual({
            "name": "Just One H1 Element",
            "description": "Checks to make sure that the submission has a single h1 element.",
            "rules": {
                "one level one heading": {
                    "rule": "1 h1 element",
                    "value": "3 points"
                }
            }
        });
    });

    test('invalid yaml should throw an exception', () => {
        // const rules = rubric.parse_rubric('fixtures/actually_markdown.yml');
        function load_markdown() {
            rubric.parse_rubric('fixtures/actually_markdown.yml')
        }

        expect(load_markdown).toThrow();
    });
});
