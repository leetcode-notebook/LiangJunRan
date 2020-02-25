/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
    let aArr = a.split(/[+]|i/);
    let bArr = b.split(/[+]|i/);
    return ((aArr[0] * bArr[0] - aArr[1] * bArr[1]) + "+" + (aArr[0] * bArr[1] + aArr[1] * bArr[0]) + "i");
};