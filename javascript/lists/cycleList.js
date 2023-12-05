//this is to find if there is a cycle within a list
var hasCycle = function(head) {
    //if the head of the next head are empty return null
    if(head===null||head.next===null){
        return false
    }
    //set a slow head as a pointer
    let slow = head
    //set a faster pointer
    let fast = head.next
    //while the values are not null
    while(slow!==null&&fast!==null){
        //slow will traverse to the next node
        slow = slow.next
        //if the next node of fast is null return empty
        if(fast.next===null){
            return false
        }
        //if the next node is not empty traverse two nodes
        fast = fast.next.next
        //if either slow or fast are null return false
        if(slow===null||fast===null){
            return false
        }
        //if fast and slow are the same, the list is cyclic
        if(slow===fast){
            return true
        }
    }
};