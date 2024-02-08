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