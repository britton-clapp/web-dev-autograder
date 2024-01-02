const {describe, expect} = require("@jest/globals");
const css = require("./implements_property");
describe('should correctly count css rules and properties in strings of css text', () => {
  test('find a single color property', () => {
    const text = `strong {
  color: red;
}

div.menu-bar li:hover > ul {
  display: block;
}`;
    expect(css.implements_property(text, 'color')).toBe(1);
  });

  test('ignore a single property that isn\'t in a rule', () => {
    const text = `position: absolute; color: red; height: 100px;`;
    expect(css.implements_property(text, 'color')).toBe(0);
  });

});
