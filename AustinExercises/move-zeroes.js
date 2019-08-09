var moveZeros = function (arr) {
    let copyArray = [];
    let zeroCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0 && (typeof arr[i] == 'number' || typeof arr[i] == 'string')) {
            zeroCount++
        } else {
            copyArray.push(arr[i]);
        }
    }
    for (let i = 0; i < zeroCount; i++) {
        copyArray.push(0);
    }
    return copyArray;
};