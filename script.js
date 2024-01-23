const todoInput = document.querySelector(".todoInput");
const todoButton = document.querySelector(".todoButton");
const todoList = document.querySelector(".todoList");
const counterP = document.querySelector(".counter")
let count = todoList.children;

if (localStorage.getItem("counter") != 0){
    counterP.innerHTML = localStorage.getItem("counter") + " Tasks Left";
}




todoButton.addEventListener("click", (event) => {

    event.preventDefault()

    if (todoInput.value == ""){
        alert("Pleas enter text in the field");
        return;
    }
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    completedButton.classList.add("completeButton")

    const newTodo = document.createElement("input");
    newTodo.setAttribute("value", todoInput.value);
    newTodo.setAttribute("readonly", true);
    newTodo.classList.add("todoItem");

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    deleteButton.classList.add("deleteButton")

    const editButton = document.createElement("button");
    editButton.innerHTML = '<i class="fa-solid fa-pencil"></i>';
    editButton.classList.add("editButton")


    todoDiv.appendChild(completedButton);
    todoDiv.appendChild(newTodo)
    todoDiv.appendChild(deleteButton);
    todoDiv.appendChild(editButton);
    todoList.appendChild(todoDiv);

    todoInput.value = "";
    saveData();
    if (count.length != 0) {
        counterP.innerHTML = count.length + " Tasks Left";
    }
    else {
        counterP.innerHTML = "";
    }

    localStorage.setItem("counter", count.length);
    console.log(count.length);

    // completedButton.addEventListener("click", () => {
    //     if (completedButton.innerHTML == '<i class="fa-regular fa-circle-check"></i>') {
    //         completedButton.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    //         saveData();
    //     }
    //     else {
    //         completedButton.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
    //         saveData();
    //     }
    //     newTodo.classList.toggle("crossed")
    //     saveData();
    // });

    // editButton.addEventListener("click", () => {
    //     newTodo.toggleAttribute("readonly");
    //     editButton.classList.toggle("checkedButton");
    //     newTodo.classList.toggle("checkedText");
    //     newTodo.focus();
    //     saveData();
    // });

   

    // deleteButton.addEventListener("click", () => {
    //     todoList.removeChild(todoDiv);
    //     saveData();
    // });
    
});

todoList.addEventListener('click', (e) => {
    const item = e.target;
    console.log(e.target);
    const newTodo = document.querySelector(".todoItem");
    const editButton = document.querySelector(".editButton");
    const completedButton = document.querySelector(".completeButton");

    if (item.classList[0] == "deleteButton") {
        const todo = item.parentNode;
        todo.remove();
        saveData();
        if (count.length != 0) {
            counterP.innerHTML = count.length + " Tasks Left";
        }
        else {
            counterP.innerHTML = "";
        }
        localStorage.setItem("counter", count.length);
    }
    else if (item.classList[0] == "editButton"){
        const editButton = item;
        const newTodo = item.previousSibling.previousSibling;
        console.log(newTodo);
        newTodo.toggleAttribute("readonly");
        editButton.classList.toggle("checkedButton");
        newTodo.classList.toggle("checkedText");
        newTodo.focus();
        saveData();
    }
    else if (item.classList[0] == "completeButton") {
        const todo = item;
        const inputElement = item.nextSibling;
        if (todo.innerHTML == '<i class="fa-regular fa-circle-check"></i>') {
            todo.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
            saveData();
        }
        else {
            todo.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
            saveData();
        }
        inputElement.classList.toggle("crossed");
        saveData();
    }

    
})



const saveData = () => {
    localStorage.setItem("data", todoList.innerHTML);
}

const loadData = () => {
    todoList.innerHTML = localStorage.getItem("data");
}




loadData();
// localStorage.clear();

