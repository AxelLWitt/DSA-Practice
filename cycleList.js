//this is to find if there is a cycle within a list
var hasCycle = function(head) {
    if(head===null||head.next===null){
        return false
    }
    let slow = head
    let fast = head.next
    while(slow!==null&&fast!==null){
        slow = slow.next
        if(fast.next===null){
            return false
        }
        fast = fast.next.next
        if(slow===null||fast===null){
            return false
        }
        if(slow===fast){
            return true
        }
    }
    fast = head
    while(slow!==fast){
        slow = slow.next
        fast = fast.next
    }
    return slow === fast
};