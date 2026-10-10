function addTask(tasks, title) {
  const newTask = { id: Date.now(), title, completed: false };
  return [...tasks, newTask];
}

function removeTask(tasks, id) {
  return tasks.filter((task) => task.id !== id);
}

function completeTask(tasks, id) {
  return tasks.map((task) => {
    if (task.id !== id) {
      return task;
    }

    return { ...task, completed: true };
  });
}

function countIncompleteTasks(tasks) {
  return tasks.filter((task) => task.completed === false).length;
}

const tasks = [
  { id: 1, title: "Review variables", completed: true },
  { id: 2, title: "Practice functions", completed: false },
];

const withNewTask = addTask(tasks, "Build task utilities");

console.log(withNewTask.map((task) => task.title));

const completed = completeTask(withNewTask, 2);

console.log(countIncompleteTasks(completed));

console.log(removeTask(completed, 1).map((task) => task.id));
console.log(tasks.length);
console.log(countIncompleteTasks(tasks));
