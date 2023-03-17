function checkSpam(str) {
    let newStr = str.toUpperCase();

    return newStr.includes('VIAGRA') || newStr.includes('XXX');
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));