// 1. dao nguoc mot chuoi.
// function reverseString(str) {
//     if(!str) return null;
//     const arrStr = str.split(" ");
//     const reverseStr = arrStr.reverse().join(" ");
//     return reverseStr
// }
// console.log(reverseString("my name is evondev"))

// 2. dao nguoc mot chuoi bao gom cac ki tu
// function reverseWord(str) {
//   if (!str) return null;
//   const arrStr = str
//     .split(" ")
//     .map((item) => item.split("").reverse().join("")).reverse().join(" ");
//   console.log(arrStr);
// }
// reverseWord("i love ");

// 3. in hoa chu cai dau
function capitalization(word = "") {
  if (word.length === 0) return null;
  let newWord = word.toLowerCase().charAt(0).toUpperCase();
  let otherWord = word.toLowerCase().slice(1);
  return `${newWord}${otherWord}`;
}
function capitalizaStr(str) {
  if (!str) return null;
  const result = str
    .split(" ")
    .map((item) => capitalization(item))
    .join(" ");
    console.log(result);
}
capitalizaStr("my name is evondev")
