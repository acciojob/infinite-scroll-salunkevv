//your code here!
let i = 11;
let scroll = document.getElementById("infi-list");
scroll.addEventListener("scroll", () => {
  let trigger = scroll.scrollHeight - scroll.clientHeight; //scroll height--> total height of container and clientHeight -->total visible height
  if (trigger - scroll.scrollTop <= 5) {
    let ele = document.createElement("li");
    ele.innerHTML = `Item ${i}`;
    scroll.appendChild(ele);
    i++;
  }
});
for (let i = 1; i <= 10; i++) {
  let ele = document.createElement("li");
  ele.innerHTML = `Item ${i}`;
  scroll.appendChild(ele);
}

