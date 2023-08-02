const {expect, describe} = require("@jest/globals");
const html = require('is_valid');
describe('should validate html', () => {
  test('correctly determine that this text is valid html', () => {
    const text = "<!doctype html><html><body><p>Fake text here.</p></body></html>";
    expect(html.is_valid(text)).toBe(true);
  });
});
