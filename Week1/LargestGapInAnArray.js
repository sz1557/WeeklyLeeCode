const arr = [-3, -1, 6, 7, 0];
const findGap = (arr) => {
    arr.sort((a, b) => a - b);
    console.log(Math.abs(arr[arr.length - 1] - arr[0]));
    return Math.abs(arr[arr.length - 1] - arr[0]);
}

findGap(arr);