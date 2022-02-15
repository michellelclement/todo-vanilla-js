//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);

//Functions 

function addTodo(event){
    //Prevent form from submittin
    event.preventDefault();
    console.log("Hello");
    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = "hey";
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = "<i class="fas fa-check"></i>";
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);
    //Teash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = "<i class="fas fa-trash"></i>";
    trasButton.classList.add("trasd-btn");
    todoDiv.appendChild(trashButton);
}   