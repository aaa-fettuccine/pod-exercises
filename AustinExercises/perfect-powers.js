var isPP = function(n){
    for (let i = 2; i < 100; i++) {
        if (Number((Math.pow(n, 1/i)).toFixed(6)) % 1 == 0) {
            return [Number((Math.pow(n, 1/i)).toFixed(6)), i];
        }
    }
    return null;
};