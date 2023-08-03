const {HtmlValidate, StaticConfigLoader} = require("html-validate");

async function is_valid(text) {
  // @TODO: Handle versions?
  // @TODO: Handle doctypes?
  // @TODO: Set error threshold?
  // @TODO: Set warning threshold?

  const loader = new StaticConfigLoader();
  const htmlvalidate = new HtmlValidate(loader);
  const report = await htmlvalidate.validateString(text);



  const valid = false;
  return report.valid;
}

exports.is_valid = is_valid;
