
var MinStack = function() {
    this.stack = [];
    this.minStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    //push the new value into the stack
    this.stack.push(val)
    //check to see if the new val is less than the old one or if minStack is empty
    if(this.minStack.length===0||val<this.minStack[this.minStack.length-1]){
        this.minStack.push(val)
    }else{
        //if not create another min num in the minStack for any removals
        this.minStack.push(this.minStack[this.minStack.length-1])
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    //initalize two stacks for 0(1) accessing
    this.stack.pop()
    //pop value off when the function is called
    this.minStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    //return the top value in the stack
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    //return the minimum value
    return this.minStack[this.minStack.length-1]
};