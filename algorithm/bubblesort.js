function bubblesort(arr) {
    let n = arr.length;
    // This function applies adjacent comparisons and immediate swaps with adjacent elements
    for (let i = 0; i < n - 1; i++) {
        let isSwapped = false;
        // We just need n-1 iterations because after that, we will be left with the smallest elements
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }
        // If no elements were swapped, the array is already sorted
        if (!isSwapped) break;
    }
    return arr; // Return the sorted array
}

module.exports = bubblesort;
