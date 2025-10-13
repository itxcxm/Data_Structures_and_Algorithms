energy = [5,2,-10,-5,1]
k = 3

def maximumEnergy(energy,k):
    for i in range(len(energy)-1-k,-1,-1):
        energy[i] = energy[i] + energy[i+k]            
    return max(energy)

    # maxs = energy[len(energy)-1]
    # for j in range(len(energy)-1,len(energy)-1-k,-1):
    #     maxs = max(maxs,energy[j])
    
    # for i in range(len(energy)-1-k,-1,-1):
    #     energy[i] = energy[i] + energy[i+k]
    #     maxs = max(maxs,energy[i])        
    # return maxs
print(maximumEnergy(energy,k))