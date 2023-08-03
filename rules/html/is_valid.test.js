const {expect, describe} = require("@jest/globals");
const html = require('./is_valid');
describe('should validate html', () => {
  test('correctly determine that this text is valid html', async () => {
    const text = `<!DOCTYPE html>
<html lang="en"><head><title>Test</title></head><body><p>Fake text here.</p></body>
</html>`;
    const validity = await html.is_valid(text);
    expect(validity).toBe(true);
  });

  test('missing doctype causes validation to fail', async () => {
    const text = `<html lang="en"><head><title>Test</title></head><body><p>Fake text here.</p></body>
</html>`;
    const validity = await html.is_valid(text);
    expect(validity).toBe(true);
  });

});
