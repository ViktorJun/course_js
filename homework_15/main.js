const newDiv = document.createElement("div");
newDiv.className = "container";
document.body.appendChild(newDiv);
const container = document.querySelector('.container');

const title = document.createElement("h1");
title.textContent = 'ToDoList';
container.appendChild(title);

const containerForm = document.createElement("form");
containerForm.classList = 'form js--form';
container.appendChild(containerForm);
const form = document.querySelector('.form');

const input = document.createElement("input");
input.name = 'task';
input.id = 'task-input';
input.required = true;
input.classList = 'form__input js--form__input';
form.appendChild(input);

const buttonSubmit = document.createElement("button");
buttonSubmit.className = 'form__btn';
buttonSubmit.textContent = 'Додати';
form.appendChild(buttonSubmit);

const wrapperList = document.createElement("ul");
wrapperList.className = 'js--todos-wrapper';
container.appendChild(wrapperList);
const list = document.querySelector('.js--todos-wrapper');

let arrTasks = [];

window.addEventListener('load', loadTasks);

container.addEventListener('click', buttonHandler);

function buttonHandler(event) {
    if (event.target.classList.contains('form__btn')) {
        event.preventDefault();
        addingTask();
    } else if (event.target.classList.contains('todo-item__delete')) {
        event.preventDefault();
        const idToDelete = event.target.parentElement;
        arrTasks = arrTasks.filter(task => task.id !== idToDelete.id);
        idToDelete.remove();
        saveTasks();
    }
}

function addingTask() {
    const taskValue = input.value;
    const idTask = `${Date.now()}`;

    const newTask = document.createElement('li');
    newTask.id = idTask;
    newTask.className = 'todo-item';
    list.appendChild(newTask);

    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.addEventListener('change', doneTask);
    newTask.appendChild(inputCheckbox);

    const text = document.createElement('span');
    text.textContent = taskValue;
    text.className = 'todo-item__description';
    newTask.appendChild(text);

    const buttonDel = document.createElement('button');
    buttonDel.className = 'todo-item__delete';
    buttonDel.textContent = 'Видалити';
    newTask.appendChild(buttonDel);

    const taskObj = { text: taskValue, id: idTask, checked: inputCheckbox.checked };
    arrTasks.push(taskObj);
    input.value = "";
    saveTasks();
}

function doneTask(event) {
    const listItem = event.target.parentElement;
    const taskId = listItem.id;
    const taskIndex = arrTasks.findIndex(task => task.id === taskId);

    arrTasks[taskIndex].checked = event.target.checked;

    if (event.target.checked) {
        listItem.classList.add('todo-item--checked');
    } else {
        listItem.classList.remove('todo-item--checked');
    }

    saveTasks();
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(arrTasks));
}

function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        arrTasks = JSON.parse(savedTasks);
        arrTasks.forEach(task => {
            const newTask = document.createElement('li');
            newTask.id = task.id;
            newTask.className = 'todo-item';
            list.appendChild(newTask);

            const inputCheckbox = document.createElement('input');
            inputCheckbox.type = 'checkbox';
            inputCheckbox.checked = task.checked;
            inputCheckbox.addEventListener('change', doneTask); // ???
            newTask.appendChild(inputCheckbox);

            if (task.checked) {
                newTask.classList.add('todo-item--checked');
            }

            const text = document.createElement('span');
            text.textContent = task.text;
            text.className = 'todo-item__description';
            newTask.appendChild(text);

            const buttonDel = document.createElement('button');
            buttonDel.className = 'todo-item__delete';
            buttonDel.textContent = 'Видалити';
            newTask.appendChild(buttonDel);
        });
    }
}
