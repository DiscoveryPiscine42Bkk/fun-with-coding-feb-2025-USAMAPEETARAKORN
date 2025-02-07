document.addEventListener("DOMContentLoaded", loadTodos);

function addTodo() {
    let text = prompt("Enter a new TO DO:");
    if (text) {
        createTodo(text);
        saveTodos();
    }
}

function createTodo(text) {
    let todo = document.createElement("div");
    todo.className = "todo";
    todo.textContent = text;
    todo.onclick = () => removeTodo(todo);
    document.getElementById("ft_list").prepend(todo);
}

function removeTodo(todo) {
    if (confirm("Do you want to remove this TO DO?")) {
        todo.remove();
        saveTodos();
    }
}

function saveTodos() {
    let todos = [];
    document.querySelectorAll(".todo").forEach(todo => {
        todos.push(todo.textContent);
    });

    localStorage.setItem("todos", JSON.stringify(todos)); // บันทึกลง localStorage
}

function loadTodos() {
    let todos = JSON.parse(localStorage.getItem("todos") || "[]"); // โหลดจาก localStorage
    todos.forEach(text => createTodo(text));
}
