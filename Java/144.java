class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
        LinkedList<TreeNode> stack = new LinkedList<>();
        LinkedList<Integer> output = new LinkedList<>();

        if (root == null) {
            return output;
        }

        stack.add(root);

        while(!stack.isEmpty()){
            TreeNode tree = stack.pollLast();

            output.add(tree.val);

            if (tree.right != null) {
                stack.add(tree.right);
            }

            if (tree.left != null) {
                stack.add(tree.left);
            }

        }

        return output;

    }
}