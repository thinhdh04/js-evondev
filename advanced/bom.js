// browser object model: alert, prompt, confirm, window
// 1. location
console.log(location);
console.log(window.location);
// setTimeout(() => {
//     location.href = "https://tinhte.vn/"
// }, 1000);
let params = new URLSearchParams(location.search);
console.log(params);
console.log(params.get("type"));
console.log(params.get("page"));
console.log(params.has("page"));
console.log(params.set("page", 10));
console.log(params.get("page"));
console.log(params.keys());
for (let it of params.values()) {
  console.log(it);
}
params.delete("page");
// 2. history
console.log(window.history);
// history.back();
// history.forward();
// history.go();
// 3. Navigator
console.log(window.navigator.userAgent);
const deviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};
console.log(deviceType());