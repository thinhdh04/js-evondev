const progress = document.querySelector(".progress")
window.addEventListener("scroll", function () {
  // console.log(scrollTop)
  const scrollTop = window.pageYOffset;
  //   tinh ra chieu cao cua scrollbar
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const width = (scrollTop / height) * 100;
  progress.style.width = `${width}% `
});
