const swap = (array, position1, position2) => {
    [array[position1], array[position2]] = [array[position2], array[position1]];
};


function shuffle(array, numberOfSwaps) {
    for (let i = 0; i < numberOfSwaps; i++) {
        const randomIndex1 = Math.floor(Math.random() * array.length);
        const randomIndex2 = Math.floor(Math.random() * array.length);
        swap(array, randomIndex1, randomIndex2);
    }
}


const bubble_sort = (array) => {
    const length = array.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
};


const selection_sort = (array) => {
    const length = array.length;
    for (let i = 0; i < length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(array, i, minIndex);
        }
    }
    return array;
};


const quick_sort = (array, start = 0, end = array.length - 1) => {
    if (start < end) {
        const pivotIndex = particionamento(array, start, end);
        quick_sort(array, start, pivotIndex - 1);
        quick_sort(array, pivotIndex + 1, end);
    }
    return array;
};


const particionamento = (array, start, end) => {
    const pivot = array[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
        if (array[i] <= pivot) {
            swap(array, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(array, pivotIndex, end);
    return pivotIndex;
};
