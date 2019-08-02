function findOutlier(integers){
    let binaryArray = [];
    var sum = 0;
    integers.forEach(function(data) {
        let binary = Math.abs(data) % 2;
        sum += Math.abs(data) % 2;
        binaryArray.push(binary);
    });
    if (sum > 1) {
        return integers[binaryArray.indexOf(0)]
    } else {
        return integers[binaryArray.indexOf(1)]
    }
}