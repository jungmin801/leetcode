/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let currentNode = root;
    if(!currentNode || currentNode.length === 0) return null;
    
    function recursive (node) {
        if(!node) return null;
        if(node.val === val) return node;
        if(node.val > val) {
            return recursive(node.left);
        }else {
            return recursive(node.right);
        }
    }
    
    return recursive(currentNode);
    
};


