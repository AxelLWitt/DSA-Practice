function validSodoku(board){
    //create hashmaps for each of the areas that need to be checked
    let row = {}
    let column = {}
    let box = {}
    //set up sets to check if there is a repeat number
    // for each of the 9 components
    for(let i=0;i<9;i++){
        row[i] = new Set()
        column[i] = new Set()
        box[i] = new Set()
    }

    //must use a nested loop to iterate through the whole board
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            //assign the num to be checked to a variable
            let num = board[i][j]
            //check if the sets created in the hashmaps contain the number being checked
            if(row[i].has(num)){
                return false
            }
            row[i].add(num)
            if(column[j].has(num)){
                return false
            }
            column[j].add(num);
            let boxInd = Math.floor(i/3)*3+Math.floor(j/3);
            if(box[boxInd].has(num)){
                return false;
            }
            box[boxInd].add(num)
        }
    }
    return true
}