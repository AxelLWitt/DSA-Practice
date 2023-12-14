class Solution:
    def firstBadVersion(self, n: int) -> int:
        min = 0
        max = n
        while min <= max:
            mid = math.floor((min+max)/2)
            print(mid)
            if isBadVersion(mid)==True and isBadVersion(mid-1)==False:
                return mid
            elif isBadVersion(mid) == True:
                max=mid-1
            elif isBadVersion(mid) == False:
                min=mid+1