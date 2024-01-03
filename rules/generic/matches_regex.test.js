const {expect, describe} = require("@jest/globals");
const generic = require("../generic/matches_regex")

describe('should find strings or the lack thereof', () => {
    test('simple regex matches', () => {
        let text = "<html><body><p>SOMETHING HERE</p></body></html>";
        expect(generic.matches_regex(text, 'SOMETHING HERE')).toBe(true);

        expect(generic.does_not_match_regex(
            "<html><body><p>SOMETHING HERE</p></body></html>",
            'NOTHING HERE'
        )).toBe(true);

    });
});