function getMaxSubSum (arr) {
    let maxSum = 0;
    let subArr = 0;

    for (let num of arr) {
        subArr += num;
        maxSum = Math.max(maxSum, subArr);
        if (subArr < 0) subArr = 0;
    }
    return maxSum;
}


console.log(getMaxSubSum([-1, 2, 3, -9]))//== 5 (сумма выделенных элементов)
console.log(getMaxSubSum([2, -1, 2, 3, -9])) //== 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])) //== 11
console.log(getMaxSubSum([-2, -1, 1, 2])) //== 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])) //== 100
console.log(getMaxSubSum([1, 2, 3])) //== 6 (берём все)