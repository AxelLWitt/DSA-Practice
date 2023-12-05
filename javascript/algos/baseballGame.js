var calPoints = function(operations) {
    //initalize a stack
    let stack = []
    //score tracker
    let score = 0
    for(let i=0;i<operations.length;i++){
        //switch statement for optimal time
        switch(operations[i]){
            case '+':
                //last two numbers sum pushed into stack and added to score
                let sum = stack[stack.length-2]+stack[stack.length-1];
                stack.push(sum);
                score+=sum;
                break;
            case 'D':
                //double the last value in the stack and add it to score/stack
                let double = stack[stack.length-1]*2;
                stack.push(double);
                score+=double;
                break;
            case 'C':
                //remove the last item from the stack
                let remove = stack.pop()
                score -= remove
                break;
            default:
                //convert the string into an int and add it to the stack/score
                let int = parseInt(operations[i])
                stack.push(int)
                score+=int
                break;
        }
    }
    return score
};