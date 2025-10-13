height = [1,1]

def maxArea(height):
    l =0
    r = len(height)-1
    maxs = 0
    while l<r:
        if height[l]>height[r]:
            maxs = max(height[r]*(r-l),maxs)
            r=r-1
        if height[l]<height[r]:
            maxs = max(height[l]*(r-l),maxs)
            l =l+1
        if height[l]==height[r]:
            maxs = max(height[l]*(r-l),maxs)
            l =l+1
            r=r-1
    return maxs
print(maxArea(height))