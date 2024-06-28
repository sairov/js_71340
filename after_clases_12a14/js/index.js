const task_form = document.querySelector('#add-task');
const todos = document.querySelector('#todos');

// crearTarea

function createTask({description, deadline, status}) {
  const tasks = JSON.parse(localStorage.getItem('tasks'));

  const ids = tasks.map(task => task.id);

  const newTask = {
    id: ids.length > 0 ? Math.max(...ids) + 1 : 0,
    description,
    deadline,
    status
  }

  tasks.push(newTask);

  localStorage.setItem('tasks', JSON.stringify(tasks));
  appendTodos();
}

// eliminarTarea

function deleteTask(id) {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const newTasks = tasks.filter(task => task.id != id);

  localStorage.setItem('tasks', JSON.stringify(newTasks));
  appendTodos();
};

// actualizarTarea

function updateTask(id, data) {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const newTasks = tasks.map(task => task.id == id && task.status == data.status);

  localStorage.setItem('tasks', JSON.stringify(newTasks));
  appendTodos();
}


// actualizarTodosEnDom

function appendTodos() {

  let tasks = [];

  if (JSON.parse(localStorage.getItem('tasks'))) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  } else {
    localStorage.setItem('tasks', JSON.stringify([]));
  }

  todos.innerHTML = "";

  tasks.forEach(task => {
    const task_container = document.createElement('article');
    task_container.className = 'task';
    task_container.id = `task-${task.id}`;

    task_container.innerHTML = `
     <div>
        <h3>${task.description}</h3>
        <p>${task.deadline}</p>
      </div>
      <p class="${task.status.toLowerCase()}">${task.status}</p>
      <button id="btn-${task.id}" class="btn-delete">Eliminar</button>
    `;

    todos.appendChild(task_container);

    const deleteButton = document.querySelector(`#btn-${task.id}`);
    // console.log(deleteButton);
    deleteButton.addEventListener('click', (e) => {
      const id = e.target.id.split('-')[1];
      deleteTask(id);
      Toastify({
        text: "Tarea eliminada con éxito",
        className: "deleted-task",
        style: {
          background: 'crimson',
          padding: '32px',
          width: '500px',
          textAlign: "center"
        },
        duration: 1000,
        gravity: 'bottom'
      }).showToast();
    });
  });
}

appendTodos();

task_form.addEventListener('submit', (e) => {
  e.preventDefault();

  const task = {
    description: e.target[0].value,
    deadline: e.target[1].value,
    status: e.target[2].value
  }

  createTask(task);
  Swal.fire({
    title: '¡Tarea creada exitosamente!',
    icon: 'success',
    confirmButtonText: 'Terminar'
  });

  task_form.reset();
});

