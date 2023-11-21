var reverseList = function(head) {
    //set new list for reversal
    let prev = null
    //set current to the head
    let curr = head
    //traverse to the end of the list while swapping the values
    while(curr!==null){
        //create a holding variable
        let hold = curr.next
        //assign curr.next to prev
        curr.next = prev
        //previous takes the value of curr
        prev = curr
        //curr is reassigned the value of hold
        curr = hold
    }
    //return the list
    return prev
};

var reverseList = function(head) {
    //base case
    if(head===null||head.next===null){
        return head
    }
    //newhead is the new reversed list
    let newHead = reverseList(head.next)
    //once base case is found, change the nodes as you recursivly climb up
    head.next.next = head
    head.next = null
    //return the new list
    return newHead
};