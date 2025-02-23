// 1 viet function so sanh 2 so va tim ra so lon hon
function compare(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        console.log("vui long nhap so")
        return 0;
    }
    return Math.max(a,b);
}
// console.log(compare(100, "1000"));

// 2 in hoa chu cai dau
function capitalize(word = ""){
    if (word.length === 0) return null;
    let newWord = word.toLowerCase().charAt(0).toUpperCase();

    let otherWord = word.toLowerCase().slice(1);
    return `${newWord}${otherWord}`;
}
console.log(capitalize("nam"));

// 3 viet ham co su dung callback (function la parameter cua function khac) in ra ket qua ham compare o tren
function useCallback(a, b, callback) {
    let max = compare(a, b)
    callback(max);
}
function printMax(number){
    console.log("max number is " + number);
}
console.log(useCallback(500, 1000, printMax))
