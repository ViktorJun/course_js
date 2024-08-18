const newDiv = document.createElement("div");
newDiv.id = "myContainer";
document.body.appendChild(newDiv);
const container = document.querySelector('#myContainer');

const listTusks = document.createElement('ul');
container.appendChild(listTusks);
listTusks.id = 'listTusks';


const addButton = document.createElement("button");
addButton.textContent = 'Add task';
container.appendChild(addButton);
addButton.id = "addButton";

const inputTask = document.createElement("input");
inputTask.placeholder = 'Write your task';
container.appendChild(inputTask);
inputTask.id = "inputTask";


let arrTasks = [];
function getCurrentButton(event) {
    const buttonId = event.target.id;
    const targetElement = event.target;

    if (buttonId === addButton.id) {
        const inputTaskValue = inputTask.value.trim();
        if (inputTaskValue !== '')  {
            const inputTaskValue = inputTask.value
            const idTask = `${Date.now()}`;
            const tusk = document.createElement('li');
            tusk.textContent = inputTaskValue;
            tusk.id = idTask;
            listTusks.appendChild(tusk);

            const buttonDelete = document.createElement("button");
            buttonDelete.textContent = 'Delete';
            buttonDelete.id = `delete-${idTask}`;
            tusk.appendChild(buttonDelete);

            const newTask = { text: inputTaskValue, id: idTask };
            arrTasks.push(newTask);
            inputTask.value = "";
        }else {
            alert('Enter a task');
        }
    }
    if (targetElement.id.startsWith('delete-')) {
        const idToDelete = targetElement.parentElement;
        arrTasks = arrTasks.filter(task => task.id !== idToDelete.id);
        idToDelete.remove();
    }
}
container.addEventListener('click', getCurrentButton)
