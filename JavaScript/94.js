/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let arr = [];
    let res = [];
    if (root == null) {
        return res;
    }
    let tree = root;
    while (tree != null || arr.length > 0) {
        while (tree != null) {
            arr.push(tree)
            tree = tree.left;
        }
        tree = arr.pop();
        res.push(tree.val)
        tree = tree.right
    }
    return res;
};