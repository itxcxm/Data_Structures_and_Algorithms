let height = [1,1]

var maxArea = function(height) {
    let l = 0
    let r = height.length-1
    let max = 0
    while(l<r){
        if(height[l]>height[r]){
            max = Math.max(height[r]*(r-l),max)
            r--
        }
        if(height[l]<height[r]){
            max = Math.max(height[l]*(r-l),max)
            l++
        }
        if(height[l]===height[r]){
            max = Math.max(height[r]*(r-l),max)
            l++
            r--
        }
    }
    return max
};

console.log(maxArea(height))