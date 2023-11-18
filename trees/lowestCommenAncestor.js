//LCA in a tree
function LCA(root, q, p){
    //if the root is null, return null
    if(!root){
        return null
    }
    //if the root is already equal to p or q, return the root
    if(root === p || root === q){
        return root
    }
    //declare left to traverse the left branches
    let left = LCA(root.left, q, p)
    //declare right to traverse the right branches
    let right = LCA(root.right, q, p)
    //if left and right are not null, return the root
    if(left!==null&&right!==null){
        return root
    }
    //if left is not null, continue traversing the left branch
    if(left!==null){
        return left
    }
    //if right is not null, continue traversing the right branch
    if(right!==null){
        return right
    }
    //return null
    return null
}