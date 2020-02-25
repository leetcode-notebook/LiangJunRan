/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        LinkedList<Integer> res = new LinkedList<>();
        LinkedList<TreeNode> stack = new LinkedList<>();
        
        if (root == null) {
            return res;
        }
        
        TreeNode tree = root;
        while (tree != null || !stack.isEmpty()) {
            while (tree != null) {
                stack.add(tree);
                tree = tree.left;
            }
            tree = stack.pollLast();
            res.add(tree.val);
            tree = tree.right;
        }
        
        return res;
    }
}