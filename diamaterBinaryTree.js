var diameterOfBinaryTree = function(root) {
    //initalize depth value
    let depth = 0

    //decalre a helper function
    function dbs(root){
        //if the root is null, return -1
        if(root===null){
            return -1
        }
        //recursivley find the height of the left root
        let left = dbs(root.left)
        //recursivley find the height of the right root
        let right = dbs(root.right)

        //det depth to the max value of depth or the left and right node + 2 to offset the 0 passed by a standard node
        depth = Math.max(depth, 2 + left + right)
        //return the max value of the left or right node plus one
        return 1+Math.max(left, right)
        
    }
    //call helper function
    dbs(root)
    //return depth
    return depth
}