var dailyTemperatures = function(temperatures) {
    //create a stack
    let stack = [];
    //create empty array filled with 0s as place holders
    let res = new Array(temperatures.length).fill(0);

    //iterate through temperatures in reverse to deque
    for(let i=temperatures.length-1;i>=0;i--){
        //if the stack is not empty and the temperature of the current temp is greater than the temp in teh stacks first position
        while(stack.length>0&&temperatures[i]>=temperatures[stack[0]]){
            //add the index of the temp to the stack
            stack.shift();
        }

        //if there is nothing in the stack, set the days until higher temp to 0
        if(stack.length===0){
            //set the index of the results to 0 as 0 days before the temp rises
            res[i] = 0;
        }else{
            //set the index of the result to the first value in the stack minus the current index
            res[i] = stack[0]-i;
        }
        //remove the value from the stack
        stack.unshift(i);
    }
    //return result
    return res;
};