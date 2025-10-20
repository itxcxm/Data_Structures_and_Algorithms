let s1 = "ab", s2 = "eidbasoo"


var checkInclusion = function(s1, s2) {
    let count1 = new Array(26).fill(0);
    let count2 = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        count1[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        count2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    function arraysEqual(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }

    let l = 0, r = s1.length-1;
    while (r <= s2.length) {
        if (arraysEqual(count1, count2)) {
            return true;
        }else{
            count2[s2.charCodeAt(l) - 'a'.charCodeAt(0)]--;
            count2[s2.charCodeAt(r+1) - 'a'.charCodeAt(0)]++;
            l++;
            r++;
        }
    }
    return false;
};

console.log(checkInclusion(s1, s2))