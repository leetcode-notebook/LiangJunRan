/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    if (seq.length == 0) return []
    
    let depth = 0,
        res = [];
        
    return seq.map((value, index) => {
        if (value == "(") {
            return (++depth) % 2;
        } else {
            return (--depth + 1) % 2
        }
    });
};