// algorithms/linearSearch.js

function linearSearch(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;  // Return the index of the target
        }
    }
    return -1;  // Return -1 if the target is not found
}

module.exports = linearSearch;
