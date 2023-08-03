/**
 * Checks to see if the `text` provided contains a css rule that implements `property_name` `count` or more times.
 * @param text
 * @param property_name
 * @param count
 * @returns {boolean}
 */
function implements_property(text, property_name, count = 1) {
  const regexString = `({\\s*|;)\\s*${property_name}:`; // slashes are escaped!
  const regex = new RegExp(regexString, "gm")
  const regexTest = text.match(regex);
  return text.match(regex).length;
}

exports.implements_property = implements_property;
