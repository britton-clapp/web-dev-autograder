const {describe, expect} = require("@jest/globals");
const css = require("./implements_property");
describe('should correctly count css rules and properties in strings of css text', () => {
  test('count single paragraph element', () => {
    const text = `strong {
  color: red;
}

div.menu-bar li:hover > ul {
  display: block;
}`;
    expect(css.implements_property(text, 'color')).toBe(1);
  });
});
