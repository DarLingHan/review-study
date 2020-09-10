var twoSum = function(nums, target) {
    var mapVal = new Map()
    for (let i in nums) {
        var resVal = target - nums[i]
        if (mapVal.get(resVal) !== undefined) {
            return [i, mapVal.get(resVal)]
        } else {
            mapVal.set(nums[i], i)
        }
    }
}

console.log(twoSum([2, 3, 5, 11], 14))