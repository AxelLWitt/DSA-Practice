//LCA in a tree
function LCA(root, q, p){
    if(!root){
        return null
    }
    if(root === p || root === q){
        return root
    }

    let left = LCA(root.left, q, p)
    let right = LCA(root.right, q, p)

    if(left!==null&&right!==null){
        return root
    }

    if(left!==null){
        return left
    }
    if(right!==null){
        return right
    }
    return null
}