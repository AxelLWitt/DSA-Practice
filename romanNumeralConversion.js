//unoptimized version

var romanToInt = function(s) {
    let map = {
        'I':1,
        "V":5,
        'X':10,
        'L':50,
        "C":100,
        'D':500,
        'M':1000
    }
    let previous = 0
    let conv = 0
    for(let i=s.length-1;i>=0;i--){
        if(map[s[i]]<previous){
            conv -= map[s[i]]
        }else{
            conv += map[s[i]]
            previous = map[s[i]]
        }
    }
    return conv
};