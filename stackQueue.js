
//initalize two arrays to keep track of the elements
var MyQueue = function() {
    //initalize a stack for pushed elements
    this.stackPush = new Array
    //initalize a stack for popped elements
    this.stackPop = new Array
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    //push to the stack
    this.stackPush.push(x)
};

/**
 * @return {number}
 */

//can be accomplished with using .shift method
MyQueue.prototype.pop = function() {
    //if the popped stack is empty populate it
    if(this.stackPop.length===0){
        //while the pushed isnt 0 add it to popped and reverse it
        while(this.stackPush.length!==0){
            //make the element the removed value
           let el = this.stackPush.pop()
           //push it onto the popped array
           this.stackPop.push(el)
        }
    }
    //return the popped value and remove if from the queue
    return this.stackPop.pop()
};

/**
 * @return {number}
 */

//this can be accomplished by using a single stack with the value set to the first index of the array-- complemented by using the .shift method 
MyQueue.prototype.peek = function(x) {
    //check if popped is populated
    if(this.stackPop.length===0){
        while(this.stackPush.length!==0){
            let el = this.stackPush.pop()
           this.stackPop.push(el)
        }
    }
    //return the last value of the stack adherering to FIFO
    return this.stackPop[this.stackPop.length-1]
};

/**
 * @return {boolean}
 */

//check if the arrays are empty
MyQueue.prototype.empty = function() {
    return this.stackPush.length===0&&this.stackPop.length===0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */