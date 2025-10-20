s1 = "ab"
s2 = "eidbasoo"

def check_inclusion(s1, s2):
    if len(s1) > len(s2):
        return False

    count1 = [0] * 26
    count2 = [0] * 26

    for i in range(len(s1)):
        count1[ord(s1[i]) - ord('a')] += 1
        count2[ord(s2[i]) - ord('a')] += 1

    def arrays_equal(arr1, arr2):
        return arr1 == arr2

    l = 0
    r = len(s1) - 1

    while r < len(s2):
        if arrays_equal(count1, count2):
            return True
        r += 1
        if r < len(s2):
            count2[ord(s2[l]) - ord('a')] -= 1
            count2[ord(s2[r]) - ord('a')] += 1
            l += 1

    return False

print(check_inclusion(s1, s2)) 