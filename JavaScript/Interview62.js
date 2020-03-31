/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
    let res = 0;
    for(let i = 2 ; i != n + 1 ; ++i){
        res = (m + res) % i
    }
    return res;
};