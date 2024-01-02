const html = require("./contains_element");
function contains_x_of_group(text, count = 1, group) {
  // @TODO: Handle "one of each item" requirement vs "one from this group"
  let foundCount = 0;
  group.forEach(item => {
    let itemFoundCount = html.contains_element(text, item, count);
    if (itemFoundCount) {
      foundCount++;
    }
  });
  return foundCount >= count;
}

exports.contains_x_of_group = contains_x_of_group;
