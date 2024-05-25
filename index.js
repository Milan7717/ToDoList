const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("list")) || [];
list.forEach((task) => {
  toDolist(task);
});

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  toDolist();
});

function toDolist(task) {
  let newTask = inputEl.value;
  if (task) {
    newTask = task.name;
  }

  const liEl = document.createElement("li");
  liEl.innerText = newTask;

  //aad task to the existing parent node
  ulEl.appendChild(liEl);
  inputEl.value = "";

  const deleteEl = document.createElement("div");
  deleteEl.innerHTML = `<i class="delete fa-solid fa-trash"></i>`;
  liEl.appendChild(deleteEl);

  deleteEl.addEventListener("click", () => {
    liEl.remove();
    updateLocalStorage();
  });
  updateLocalStorage();
}

//adding to local storage
function updateLocalStorage() {
  const liEls = document.querySelectorAll("li");
  let list = [];
  liEls.forEach((liEl) => {
    list.push({
      name: liEl.innerText,
    });
  });
  localStorage.setItem("list", JSON.stringify(list));
}
