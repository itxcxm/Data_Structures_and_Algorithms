let words = ["abba","baba","bbaa","cd","cd"]
// thêm vào set và so sánh từng phần tử trong mảng

var removeAnagrams = function(words) {
    let mySet = new Set();
    let list = []
    for(let i = 0 ; i<words.length;i++){
        if(!mySet.has(words[i].split('').sort().join(''))){
            mySet.clear()
            mySet.add(words[i].split('').sort().join(''))
            list.push(words[i])
        }
    }
    return list
};

console.log(removeAnagrams(words))