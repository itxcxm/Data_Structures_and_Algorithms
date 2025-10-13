words = ["abba","baba","bbaa","cd","cd"]
# so sánh từng phần tử hiện tại và phần tử phía sau
def removeAnagrams(words):
    lists = [words[0]]
    for i in range(1,len(words),1):
        if sorted(words[i]) == sorted(words[i-1]):
            ''
        else:
            lists.append(words[i])
    return lists

print(removeAnagrams(words))