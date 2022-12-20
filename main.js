var findFirstOccurrence = function (arr, target) {
    var left = 0;
    var right = arr.length - 1;
    ;
    while (left <= right) {
        var midNumber = Math.floor((right + left) / 2);
        if (arr[midNumber] == target) {
            return midNumber;
        }
        else if (arr[midNumber] < target) {
            left = midNumber + 1;
        }
        else {
            right = midNumber - 1;
        }
    }
    return "No number ".concat(target, " in the array");
};
console.log(findFirstOccurrence([2, 5, 5, 5, 6, 6, 8, 9, 9, 9], 7));
