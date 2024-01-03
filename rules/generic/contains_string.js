// Is this even necessary?

function contains_string(haystack, needle) {
    return(haystack.includes(needle));
}

function does_not_contain_string(haystack, needle) {
    return !contains_string(haystack, needle);
}

exports.contains_string = contains_string;
exports.does_not_contain_string = does_not_contain_string;