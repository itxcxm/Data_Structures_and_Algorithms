opererations = ["--X","X++","X++"]

def finalValueAfterOperations( operations):
    tong = 0
    for i in range(len(operations)):
        if('+' in operations[i]):
            tong = tong + 1
        else:
            tong = tong - 1
    return tong
    
print(finalValueAfterOperations(opererations))