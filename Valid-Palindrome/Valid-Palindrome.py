import re
s = "A maa plan, a canal: Panama"

def isPalindrome(s):
    chuoi = re.sub(r'[^a-z0-9]','',s.lower())
    i=0
    j=len(chuoi)-1
    while i<j:
        if chuoi[i]!=chuoi[j]:
            return False
        i+=1
        j-=1
    return True

print(isPalindrome(s))