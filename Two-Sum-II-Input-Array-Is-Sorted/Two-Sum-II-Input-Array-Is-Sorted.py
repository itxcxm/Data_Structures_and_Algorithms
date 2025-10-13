numbers = [2,7,11,15]
target = 9

def twoSum(numbers,target):
    i = 0 
    j=len(numbers)-1
    while i<j:
        if numbers[i]+numbers[j]==target:
            return [i+1,j+1]
        if numbers[i]+numbers[j]>target:
            j=j-1
            i=0
        if numbers[i]+numbers[j]<target:
            i=i+1

print(twoSum(numbers,target))