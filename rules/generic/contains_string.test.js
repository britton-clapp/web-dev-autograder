const {expect, describe} = require("@jest/globals");
const generic = require("./contains_string");

describe('should find strings or the lack thereof', () => {
    test('simple string matches', () => {
        expect(generic.contains_string('is there SOMETHING HERE?', 'SOMETHING HERE')).toBe(true);

        expect(generic.does_not_contain_string('is there NOTHING HERE?', 'SOMETHING HERE')).toBe(true);
    });
});