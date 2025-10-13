numBottles = 13
numExchange = 6

def maxBottlesDrunk( numBottles, numExchange):
    """
    # dùng while
    tong = numBottles
    while numBottles >= numExchange:
        numBottles -= numExchange - 1
        numExchange+=1
        tong +=1
    return tong
    """
    #dùng đệ quy
    def tong(x,y):
        if(x>=y):
            return 1 + tong(x-y+1,y+1)
        else:
            return 0
    
    return numBottles + tong(numBottles,numExchange)
print(maxBottlesDrunk(numBottles,numExchange))