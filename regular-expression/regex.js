// regular expression: bieu thuc chinh quy
// 1. 2 cach khai bao voi regex
const re1 = /hello/;
const re2 = new RegExp("hello");
// hello world
// regex.test(value)
console.log(re1.test("hello world hello"));
// 2. Anchor ^ $
// ^ string bat dau voi tu nao do
// $ string ket thuc voi tu nao do
/hi/.test("hi");
/hi$/.test("welcome to hi");
/hi$/.test("welcome to hello");
/^hi/.test("hi welcome to hi");
/^hi/.test(" welcome to hi");
// 3. ranges []
// [a-z]: cac ki tu tu a den z in thuong
// [A-Z]: cac ki tu tu A den Z in HOA
// [0-9]: cac so tu 0-9
// [a-z0-9A-Z]: cac so tu 0-9 hoac tu a-z hoac tu A-Z
/[a-z]/.test("sdfsd");
/[a-z]/.test("AJHS");
/[A-Z]/.test("A");
/[A-Z]/.test("x");
/[0-9]/.test("10000");
/[0-9]/.test("100asdfsfad00");
/[0-9]/.test("asdfsfad");
/[a-zA-Z0-9]/.test("as12332dfsfad");
/[^a-z]/.test("a");
// 4. Meta characters
// \d: khop voi so no se tuong duong voi [0-9]
/\d/.test("123");
// \D: nguoc lai voi \d tuong duong voi [^0-9]
/\D/.test("123");
// \w: khop voi cac ki tu va dau gach duoi va so, no se tuong duong [a-zA-Z0-9_]
/\w/.test("_");
// \W: nguoc lai \w no se tuong duong [^a-zA-Z0-9_]
/\W/.test("_");
// \s: khop voi cac ki tu khoang trang: spaces, tab, newlines
/\s/.test(" ");
// \S: cac ki tu khong phai khoang trang
/\S/.test(" ");
// \n: khop voi newline( xuong hang )
// \t: khop voi lai tab character
// .: khop voi tat cac moi thu ngoai tru newline(\n)
// [^]: khop voi tat cac moi thu bao gom newline(\n)

// 5. Quantifiers: {n} {n,m} + ? *
// string.match(regex) "abc".match(/\w/) -> []
// {n}: so luong nhat dinh
// {n,m}: so luong trong khoang tu n toi m
// +: lay 1 hoac nhieu ky tu thoa dieu kien
const str1 = "welcome to 20219678465589";
console.log(str1.match(/\d\d\d\d/)[0]);
console.log(str1.match(/\d{4}/)[0]);
console.log(str1.match(/\d{4,6}/)[0]);
console.log(str1.match(/\d+/)[0]);
const str2 = "color or colour?";
// ?: co the co hoac khong co ki tu nao do
console.log(str2.match(/colou?r/g));
// flag
// g: global
// i: case
// m: multiple line
// *: khong co hoac la nhieu
const str3 = "";
console.log(str3.match(/\d?/g));
// 6. groups ()
/(\d{3})?(\w+)/.test("123");
// 7. Escaping \ / [ ] ( ) { } ? + * | . ^ $
// 8. Boundaries \b \B
/\?/.test("?");
/\*/.test("*");
// \b
"my name is evondev".match(/\bevondev/g);
// \B
"my name isevondev".match(/\Bevondev/g);
// 9.
const str4 = "hello welcome hello to my hello";
console.log(str4.replace("hello", "evondev"));
// string.replace(regex, value);
str4.replace(/hello/g, "evondev");
"welcome 1234567".match(/\d+/g);