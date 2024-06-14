const task_form = document.querySelector('#add-task');
const todos = document.querySelector('#todos');

let tasks = JSON.parse(localStorage.getItem('tasks')) == null
? localStorage.setItem('tasks', JSON.stringify([]))
: JSON.parse(localStorage.getItem('tasks'));

const createNewTask = (task) => {
  const old_tasks = JSON.parse(localStorage.getItem('tasks'));
  old_tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify( old_tasks));
}

const appendTasks = () => {
  todos.innerHTML = '';
  JSON.parse(localStorage.getItem('tasks')).forEach((task, index) => {
    const task_container = document.createElement('article');
    task_container.className = 'task';
    task_container.id = `task-${index}`;

    task_container.innerHTML = `
      <div>
        <h3>${task.description}</h3>
        <p>${task.deadline}</p>
      </div>
      <p class="${task.status.toLowerCase()}">${task.status}</p>
      <button id="btn-${index}" class="btn-delete" type="button">Eliminar</button>
    `;

    todos.appendChild(task_container);
  });
};

task_form.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = {
    description: e.target[0].value,
    deadline: e.target[1].value,
    status: e.target[2].value
  };

  createNewTask(task);
  appendTasks();
  task_form.reset();
});

appendTasks();