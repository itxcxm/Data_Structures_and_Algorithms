let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3

var searchMatrix = function(matrix, target) {
    function check(matrixs){
        let l = 0
        let r = matrixs.length -1
        while(l<=r){
            let m = Math.floor(l+(r-l)/2)
            if(matrixs[m]===target){
                return true
            }else if(matrixs[m]>target){
                r =m-1
            }else{
                l = m +1
            } 
        }
        return false
    }

    let l = 0
    let r = matrix.length -1
    while(l<=r){
        let m = Math.floor(l+(r-l)/2)
        if(matrix[m][0]<=target && matrix[m][matrix[m].length-1]>=target){
            return check(matrix[m])
        }else if(matrix[m][0]>target && matrix[m][matrix[m].length-1]>target){
            r = m - 1
        }else{
            l = m + 1
        }
    }
    return false
};

console.log(searchMatrix(matrix,target))