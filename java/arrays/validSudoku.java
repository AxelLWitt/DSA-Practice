import java.util.*;

class Solution {
    public boolean isValidSudoku(char[][] board) {
        Set<int> seen = new HashSet<>();
        for(int i=0;i<board[0].length;i++){
            for(int j=0;j<board[0].length;j++){
                if(board[i][j] != '.'){
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
        //neetcode solution, slightly modified

        //a set of the characters that we have already come across (excluding '.' which denotes an empty space)
        Set<Character> rowSet = null;
        Set<Character> colSet = null;


        for (int i = 0; i < 9; i++) {
            //reset the sets to check the new row/cols
            rowSet = new HashSet<>();
            colSet = new HashSet<>();
            //iterate through the cols
            for (int j = 0; j < 9; j++) {
                //set a new variable to check the rows and cols
                char r = board[i][j];
                char c = board[j][i];
                //skip . and check to see if the number has been seen already for both row and cols
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

        //block
        //loop controls advance by 3 each time to jump through the boxes
        for (int i = 0; i < 9; i = i + 3) {
            for (int j = 0; j < 9; j = j + 3) {
                //checkBlock will return true if valid
                if (!checkBlock(i, j, board)) {
                    return false;
                }
            }
        }
        //passed all tests, therefore valid board
        return true;
    }

    public boolean checkBlock(int idxI, int idxJ, char[][] board) {
        Set<Character> blockSet = new HashSet<>();
        //if idxI = 3 and indJ = 0
        //rows = 6 and cols = 3
        int rows = idxI + 3;
        int cols = idxJ + 3;
        //and because i initializes to idxI but only goes to rows, we loop 3 times (once for each row)
        for (int i = idxI; i < rows; i++) {
            //same for columns
            for (int j = idxJ; j < cols; j++) {
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