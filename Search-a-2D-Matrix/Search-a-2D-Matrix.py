matrix = [[1,5,7,9],[10,11,16,20,21],[23,30,34,60,100]]
target = 3

def searchMatrix( matrix, target):
    def check(matrixs):
        l = 0
        r = len(matrixs) -1
        while l<=r:
            m = l + (r-l)//2
            if matrixs[m]==target:
                return True
            if matrixs[m]>target:
                r = m-1
            else:
                l = m+1
        return False
    
    l = 0
    r = len(matrix)-1
    while l<=r:
        m = l + (r-l)//2
        if matrix[m][0]<=target and matrix[m][len(matrix[m])-1] >= target:
            return check(matrix[m])
        elif matrix[m][0]>target and matrix[m][len(matrix[m])-1]>target:
            r = m-1
        else:
            l = m +1
    return False

print(searchMatrix(matrix,target))