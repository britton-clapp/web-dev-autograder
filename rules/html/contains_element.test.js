const html = require('./contains_element');
const {expect, describe} = require("@jest/globals");

describe('should correctly count elements in strings of html text', () => {
  test('count single paragraph element', () => {
    const text = "<html><body><p>Fake text here.</p></body></html>";
    expect(html.contains_element(text, 'p')).toBe(1);
  });

  test('count multiple paragraph elements', () => {
    const text = `<!DOCTYPE html>
      <html>
      <body>
      
      <h1>A Heading</h1>
      <p>First paragraph.</p>
      <p>2nd paragraph.</p>
      
      </body>
      </html>`;
    expect(html.contains_element(text, 'p')).toBe(2);
  });

  test('count a single h1 element', () => {
    const text = `<!DOCTYPE html>
      <html>
      <body>
      
      <h1>A Heading</h1>
      <h2>Level Two Heading</h2>
      <h2>Level Three Heading</h2>
      <p>First paragraph.</p>
      <p>2nd paragraph.</p>
      
      </body>
      </html>`;
    expect(html.contains_element(text, 'h1')).toBe(1);
  });
});
