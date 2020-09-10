var lengthOfLongestSubstring = function(s) {
    let oldLength = 0
    let newLength = 0
    let str = ''
    var mapVal = new Map()
    let arr = s.split('')
    for (let i in arr) {
        if (mapVal.get(arr[i]) !== undefined) {
            newLength++
            if (newLength >= oldLength) {
                
            }
        } else{
            oldLength++
            str = str + arr[i]
            mapVal.set(arr[i], i)
        }
        console.log(mapVal)
        if (i === arr.length-1) {
            return mapVal.get('length')
        }
    }
};

console.log(lengthOfLongestSubstring('abcabcbb'))