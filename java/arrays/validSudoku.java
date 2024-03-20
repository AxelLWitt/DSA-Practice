import java.util.*;

class Solution {
    public boolean isValidSudoku(char[][] board) {
        //create a set that holds ints
        Set<int> seen = new HashSet<>();
        for(int i=0;i<board[0].length;i++){
            for(int j=0;j<board[0].length;j++){
                //if the board tile is not .
                if(board[i][j] != '.'){
                    //create a string that is stored in the hashset that will check if that number has been seen already
                    String b = "(" + board[i][j] +")";
                    if(!seen.add(b + i) || !seen.add(j+b) || !seen.add(i/3 + b + j/3)){
                        return false;
                    }
                }
            }
        }
        return true;
    }
}

class Solution {

    public boolean isValidSudoku(char[][] board) {
        //create two sets one for row one for columns
        Set<Character> rowSet = null;
        Set<Character> colSet = null;

        //iterate through the row
        for (int i = 0; i < 9; i++) {
            //create two new sets for each iteration
            rowSet = new HashSet<>();
            colSet = new HashSet<>();
            //iterate through the columns
            for (int j = 0; j < 9; j++) {
                //set r to the row
                char r = board[i][j];
                //set j to the column
                char c = board[j][i];
                //check if the space is occupied and check tiles
                if (r != '.'){
                    if (rowSet.contains(r)){
                        return false;
                    } else {
                        rowSet.add(r);
                    }
                }
                if (c != '.'){
                    if (colSet.contains(c)){
                        return false;
                    } else {
                        colSet.add(c);
                    }
                }
            }
        }
        //check for boxes dividing the board into 9 sections
        for (int i = 0; i < 9; i = i + 3) {
            for (int j = 0; j < 9; j = j + 3) {
                //call helper
                if (!checkBlock(i, j, board)) {
                    return false;
                }
            }
        }
        return true;
    }

    //helper function for blocks
    public boolean checkBlock(int idxI, int idxJ, char[][] board) {
        //new set for block
        Set<Character> blockSet = new HashSet<>();
        //rows/cols are set to index +3 to contain them in
        //proper boxes
        int rows = idxI + 3;
        int cols = idxJ + 3;
        //loop through the board
        for (int i = idxI; i < rows; i++) {
            for (int j = idxJ; j < cols; j++) {
                //check if valid move
                if (board[i][j] == '.') {
                    continue;
                }
                
                if (blockSet.contains(board[i][j])) {
                    return false;
                }

                blockSet.add(board[i][j]);
            }
        }

        return true;
    }
}