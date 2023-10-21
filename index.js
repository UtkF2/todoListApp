document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("task");
  const taskList = document.getElementById("task-list");
  const addTaskButton = document.getElementById("add-task");

  addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const listItem = document.createElement("li");
    listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="complete-button">Complete</button>
            <button class="delete-button">Delete</button>
        `;

    taskList.appendChild(listItem);

    taskInput.value = "";

    const completeButton = listItem.querySelector(".complete-button");
    const deleteButton = listItem.querySelector(".delete-button");

    completeButton.addEventListener("click", function () {
      listItem.classList.toggle("completed");
    });

    deleteButton.addEventListener("click", function () {
      taskList.removeChild(listItem);
    });

    // Prevent the "Delete" button from triggering the "Complete" action
    deleteButton.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  });
});
