const {expect, describe} = require("@jest/globals");
const html = require("./contains_x_of_group");

describe('should correctly count elements from a group', () => {
  test('find either a paragraph or an h1 element', () => {
    const text = "<html><body><h1>Heading</h1><p>Fake text here.</p></body></html>";
    expect(html.contains_x_of_group(text, 1, ['p', 'h1'])).toBe(true);
  });
  test('correctly finds zero elements', () => {
    const text = "<html><body><h1>Heading</h1><p>Fake text here.</p></body></html>";
    expect(html.contains_x_of_group(text, 1, ['br', 'h2'])).toBe(false);
  });
});
