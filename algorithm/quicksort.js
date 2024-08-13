function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, pivotIndex, L, R) {
    /**
     * Time: O(n)
     * Space: O(1)
     */
    let pivotElement = arr[pivotIndex];
    let i = L - 1;
    // Swap the pivot to the end
    swap(arr, pivotIndex, R);
    let j = L;
    while (j <= R - 1) {
        if (arr[j] <= pivotElement) {
            i++;
            swap(arr, i, j);
        }
        j++;
    }
    swap(arr, i + 1, R);
    return i + 1;
}

function pickRandomPivot(l, r) {
    return Math.floor(Math.random() * (r - l + 1) + l);
}

function f(arr, l, r) {
    if (l >= r) return;
    let pivotIndex = pickRandomPivot(l, r);
    let m = partition(arr, pivotIndex, l, r);
    f(arr, l, m - 1);
    f(arr, m + 1, r);
}

function quicksort(arr) {
    f(arr, 0, arr.length - 1);
    return arr; // Ensure the sorted array is returned
}

module.exports = quicksort;
