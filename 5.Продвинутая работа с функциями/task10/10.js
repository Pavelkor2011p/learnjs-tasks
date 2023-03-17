/* .. ваш код для inBetween и inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {

   return function (c) {
       return c >= a && c <= b;
   }
}

function inArray(arr) {
    return function (c) {
        return arr.includes(c) ;
    }
}

console.log(arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2