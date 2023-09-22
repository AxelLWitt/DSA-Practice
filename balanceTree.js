//check if a tree is balanced - if it has mroe than one branch then in one direction then it is not balanced
function Tree(val, left, right){
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : left)
}

function isBalanced(root){
    //if the root is undefined
    if(root===undefined){
        //return null
        return null
    }
    //create function for recursive calling
    function depth(node){
        //if the node is null
        if(node===null){
            //return 0 showing it is balanced
            return 0
        }
        //set the left to the function and the left of the tree
        let left = depth(node.left)
        //set the right to the function and the right of the tree
        let right = depth(node.right)
        //if right is -1 or left is -1 or the absolute value of right-left is greater than 1
        if(right===-1||left===-1||Math.abs(right-left)>1){
            //return -1
            return -1
        }
        //return the maximum value of the 
        return Math.max(left, right) + 1
    }
    //invoke depth function to check if the root does not equal -1
    return depth(root)!==-1
}