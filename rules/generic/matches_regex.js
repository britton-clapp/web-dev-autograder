// Is this even necessary?

function matches_regex(haystack, needle) {
    const regex = new RegExp(`${needle}`, "g");
    const matches = haystack.match(regex);
    return(matches ? true : false);
}

function does_not_match_regex(haystack, needle) {
    return !matches_regex(haystack, needle);
}

exports.matches_regex = matches_regex;
exports.does_not_match_regex = does_not_match_regex;