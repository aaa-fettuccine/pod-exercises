function high(x){
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
        'n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var highest = 0;
    var wordCount = 0;
    var highIndex = 0;
    if (/^ *$/.test(x)) {
        return '';
    } else {
        x.split(' ').forEach(function(data) {
            wordCount++;
            let sum = 0;
            data.split('').forEach(function(data2) {
                sum += alphabet.indexOf(data2) + 1;
            });
            if (highest < sum) {
                highest = sum;
                highIndex = wordCount
            }
        });
        return x.split(' ')[highIndex-1];
    }
}