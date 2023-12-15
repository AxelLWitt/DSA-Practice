class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        #establish has sets for each of the checked 
        cols = defaultdict(set)
        rows = defaultdict(set)
        boxes = defaultdict(set)

        #iterate through the columns and rows
        for i in range(9):
            for j in range(9):
                #if the board is empty continue with the algo
                if board[i][j] != '.':
                    #if the sets contain the same number that is being read, return false
                    if(board[i][j] in rows[i] or
                    board[i][j] in cols[j] or
                    board[i][j] in boxes[(i//3, j//3)]):
                        return False
                    #add the new number to the hashset
                    rows[i].add(board[i][j])
                    cols[j].add(board[i][j])
                    boxes[(i//3, j//3)].add(board[i][j])
        return True