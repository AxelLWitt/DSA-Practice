//check if a tree is balanced - if it has mroe than one branch then in one direction then it is not balanced
function Tree(val, left, right){
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : left)
}

function isBalanced(root){
    if(root===undefined){
        return null
    }
    function depth(node){
        if(node===null){
            return 0
        }
        let left = depth(node.left)
        let right = depth(node.right)
        if(right===-1||left===-1||Math.abs(right-left)>1){
            return -1
        }
        return Math.max(left, right) + 1
    }
    return depth(root)!==-1
}