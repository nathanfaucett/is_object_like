var isNullOrUndefined = require("is_null_or_undefined");


module.exports = isObjectLike;


function isObjectLike(value) {
    return (!isNullOrUndefined(value) && typeof(value) === "object") || false;
}
