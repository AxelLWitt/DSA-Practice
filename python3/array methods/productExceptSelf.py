class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = []
        prod = 1
        for x in nums:
            res.append(prod)
            prod = x*prod
        prod = 1
        for i in range(len(nums)-1, -1, -1):
            res[i]*=prod
            prod*=nums[i]
        return res