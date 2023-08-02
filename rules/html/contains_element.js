function contains_element(text, element, quantity=1) {
	const regex = new RegExp(`<${element}(>| )`, "g")
	return text.match(regex).length;
}

exports.contains_element = contains_element;
