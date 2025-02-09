let inputbox = document.querySelector("#inputbox");
let list = document.querySelector("#list");

inputbox.addEventListener("keyup", function (event) {
  if (event.key === "Enter" && this.value.trim() !== "") {
    addItem(this.value.trim());
    this.value = "";
  }
});

function addItem(taskText) {
  let listItem = document.createElement("li");
  listItem.innerHTML = `${taskText} <i></i>`;

  listItem.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  listItem.querySelector("i").addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent marking as done when deleting
    listItem.remove();
  });

  list.appendChild(listItem);
}