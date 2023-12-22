class Solution {
    public int[] productExceptSelf(int[] nums) {
        int[] sums = new int[nums.length];
        int product = 1;
        for(int i = 0 ;i<nums.length;i++){
            sums[i] = product;
            product = product * nums[i];
        }
        product = 1;
        for(int i=nums.length-1;i>=0;i--){
            sums[i] = product * sums[i];
            product = product * nums[i];
        }
        return sums;
    }
}
