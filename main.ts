let findFirstOccurrence = (arr: number[], target: number): number | string => {
    let left = 0;
    let right = arr.length - 1;
    ;
    while (left <= right) {
        let midNumber = Math.floor((right + left) / 2);
        if (arr[midNumber] == target) {
            return midNumber;
        }
        else if (arr[midNumber] < target) {
            left = midNumber + 1;


        } else {
            right = midNumber - 1;

        }
    }
    return `No number ${target} in the array`;
}

console.log(findFirstOccurrence([2, 5, 5, 5, 6, 6, 8, 9, 9, 9], 9))