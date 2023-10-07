//Two methods - one following traditional algos and a single line

var addBinary = function(a, b) {
    return ((BigInt('0b'+a)+ BigInt('0b'+b)).toString(2))
};

//Traditional

var addBinary = function(a, b) {
    //grab lengths of the strings as pointers
    let i = a.length - 1;
    let j = b.length - 1;
    //a carry over greater for any bits greater than one for later use
    let carry = 0;
    //final result of the binary string addition
    let result = '';
    //while both strings are not empty
    while (i >= 0 || j >= 0) {
        //declare sum to be carry
        let sum = carry;
        //check the value of the current iteration and convert it to its base10 number
        if (i >= 0) sum += parseInt(a[i--], 10);
        if (j >= 0) sum += parseInt(b[j--], 10);
        //set the result equal to the remainder of sum modoluo 2 and add result
        result += (sum % 2);
        //set the carry to sum/2 for later use
        carry = Math.floor(sum / 2);
    }

    if (carry) {
        //if carry exists set result to the remainders in carry
        result+=carry;
    }

    return result;
};