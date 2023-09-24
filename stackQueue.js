
var MyQueue = function() {
    this.stackPush = new Array
    this.stackPop = new Array
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stackPush.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.stackPop.length===0){
        while(this.stackPush.length!==0){
           let el = this.stackPush.pop()
           this.stackPop.push(el)
        }
    }
    return this.stackPop.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function(x) {
    if(this.stackPop.length===0){
        while(this.stackPush.length!==0){
            let el = this.stackPush.pop()
           this.stackPop.push(el)
        }
    }
    return this.stackPop[this.stackPop.length-1]
};

/**
 * @return {boolean}
 */
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