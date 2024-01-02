function contains_element(text, element, quantity=1) {
	const regex = new RegExp(`<${element}(>| )`, "g");
	const match = text.match(regex);
	return match? match.length : 0;
}

exports.contains_element = contains_element;
