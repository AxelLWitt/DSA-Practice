var evalRPN = function (tokens) {
    let stack = [];
    tokens.forEach(x => {
        if(/^[+\-*/]$/.test(x)){
            let b = stack.pop();
            let a = stack.pop();
            console.log(a,b)
            switch (x){
                case "+":
                    stack.push(a + b);
                    break;
                case "-":
                    stack.push(a - b);
                    break;
                case "/":
                    let result = a/b;
                    stack.push(result < 0 ? Math.ceil(result) : Math.floor(result))
                    break;
                case "*":
                    stack.push(a*b) 
                    break;
            }
        }else{
            stack.push(parseInt(x, 10));
        }
    })
    return stack.pop();
};

//unoptimized

function symbolEval(num1, num2, symbol){
    switch(symbol){
        case '+':
            return num2+num1
        case '-':
            return num2-num1
        case '*':
            return num2*num1
        case '/':
            let result = num2/num1
            return (result < 0 ? Math.ceil(result) : Math.floor(result))
    }
}

var evalRPN = function(tokens) {
    let stack = [];
    let symbols = ['+', '-', '/', '*']
    tokens.forEach(x => {
        if(symbols.includes(x)){
            stack.push(symbolEval(stack.pop(), stack.pop(), x) )
        }else{
            stack.push(parseInt(x, 10))
        }
    })
    return stack[0]
};

//optimized for time