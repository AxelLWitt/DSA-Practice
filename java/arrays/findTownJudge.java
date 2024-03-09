class Solution {
    //algo to find whether the town contains a judge based off of 1)whther the person is trusted by all and 2)if the person trust noone else
    public int findJudge(int n, int[][] trust) {
        //create two in arrays equal to n + 1 for indexing
        int[] person = new int[n+1];
        int[] trusted = new int[n+1];
        //loop through the list  and assign the persons trusts
        for(int[] a : trust){
            //add the trusted person to the array index 
            person[a[0]]++;
            //add how many people that person trusts to thier personal index
            trusted[a[1]]++;

        }
        //find the index containing the required things
        for(int i = 1; i<=n;i++){
            //if the current index has all trsuted but trusts noone return the judge
            if(trusted[i]==n-1 && person[i]==0){
                return i;
            }
        }
        //else return -1
        return -1;
    }
}