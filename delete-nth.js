function deleteNth(arr,n){
    var sortedArray = arr.slice(0).sort();
    var editedArray = arr.reverse();
    let compare = 0;
    let counter = 0;
    for (let i = 0; i < sortedArray.length; i++) {
        if (compare == sortedArray[i]) {
            counter++;
        } else {
            compare = sortedArray[i];
            counter = 0;
        }
        if (counter >= n) {
            editedArray.splice(editedArray.indexOf(sortedArray[i]), 1)
        }
    }
    return editedArray.reverse();
}