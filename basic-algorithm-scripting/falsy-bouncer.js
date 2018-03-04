// Remove all falsy values from an array.
//
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
function isNotFalsy(value) {
    return !(value === false || value === null || value === 0 || value === "" || value === undefined || Number.isNaN(value));
}

function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    arr = arr.filter(isNotFalsy);
    return arr;
}
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([7, "ate", "", false, 9]));

