let s =",."

var isPalindrome = function(s) {
    // let newStr = '';
    // for (let i of s) {
    //     if (/[a-zA-Z0-9]/.test(i)) {
    //         newStr += i.toLowerCase();
    //     }
    // }
    // let l = 0, r = newStr.length - 1;
    // while (l < r) {
    //     if (newStr[l++] !== newStr[r--]) return false;
    // }
    // return true;

    let cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g,"")
    let left = 0;
    let right = cleanStr.length -1;
    while(left<right){
        if(cleanStr[left]!==cleanStr[right]){
            return false
        }
        left++;
        right--
    }
    return true
};

console.log(isPalindrome(s))