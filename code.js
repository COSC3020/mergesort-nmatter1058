function mergesort(array) {
    console.log('Unsorted: ', array);
    if (array.length <= 1) {
        console.log('Sorted: ', array);
        return array;
    }
    var n = array.length;
    for (i = 1; i < n; i *= 2) {
        for (j = 0; j < n - 1; j += 2 * i) {
            var mid = Math.min(j + i - 1, n - 1);
            var hi = Math.min(j + 2 * i - 1, n - 1);
             msort(array, j, mid, hi);
        }
    }
    console.log('Sorted: ', array);
    return array;
}

function msort(array, lo, mid, hi) {
    var leftArray = array.slice(lo, mid + 1);
    var rightArray = array.slice(mid + 1, hi + 1);

    var left = 0;
    var right = 0;
    var index = lo;

    while (left < leftArray.length && right < rightArray.length) {
        if (leftArray[left] <= rightArray[right]) {
            array[index++] = leftArray[left++];
        } 
        else {
            array[index++] = rightArray[right++];
        }
    }

    while (left < leftArray.length) {
        array[index++] = leftArray[left++];
    }

    while (right < rightArray.length) {
        array[index++] = rightArray[right++];
    }
}
