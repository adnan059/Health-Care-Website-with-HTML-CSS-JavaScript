const crossbar = document.getElementById("crossbar");

const list = document.getElementById("list");
const listItems = list.getElementsByTagName("li");

console.log(crossbar);

console.log(listItems);

crossbar.onclick = () => {
  list.classList.toggle("active");
};

for (let i = 0; i < listItems.length; i++) {
  listItems[i].onclick = () => {
    list.classList.remove("active");
  };
}
