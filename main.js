const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");
const tabActive = $(".tab-item.active");
const line = $(".line");
tabs.forEach((tab, index) => {
  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    tab.classList.add("active");
    $(".tab-pane.active").classList.remove("active");
    panes[index].classList.add("active");
    line.style.width = this.offsetWidth + "px";
    line.style.left = this.offsetLeft + "px";
  };
});

line.style.width = tabActive.offsetWidth + "px";
line.style.left = tabActive.offsetLeft + "px";
var index = 0;
setInterval(() => {
  const list = document.querySelectorAll(".active .span");
  list.forEach((e) => {
    e.classList.remove("change-properties");
  });
  list[index].classList.add("change-properties");
  index++;
  if (index == list.length) {
    index = 0;
  }
}, 200);
