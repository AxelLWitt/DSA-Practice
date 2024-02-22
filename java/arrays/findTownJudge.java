class Solution {
    public int findJudge(int n, int[][] trust) {
        int[] person = new int[n+1];
        int[] trusted = new int[n+1];
        for(int[] a : trust){
            person[a[0]]++;
            trusted[a[1]]++;

        }
        for(int i = 1; i<=n;i++){
            if(trusted[i]==n-1 && person[i]==0){
                return i;
            }
        }
        return -1;
    }
}