/**
 * 
 */

// 递归
var preorderTraversal = function(root) {
    return root ? [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)] : [];
};

// 迭代
var preorderTraversal = function(root) {
    let arr = [];
    let res = [];    
    
    root && arr.push(root)
    
    while(arr.length > 0) {
        let cur = arr.pop()
        res.push(root.val)
        cur.right && arr.push(cur.right) 
        cur.left && arr.push(cur.left)
    }    
    return arr
}