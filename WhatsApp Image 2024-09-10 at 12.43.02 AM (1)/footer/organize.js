// To-Do List Functionality
function addTask() {
    const taskInput = document.getElementById('newTaskInput');
    const taskText = taskInput.value;
  
    if (taskText === "") return;
  
    const taskList = document.getElementById('toDoList');
    const taskItem = document.createElement('li');
  
    taskItem.innerHTML = `
      <input type="checkbox" />
      <input type="text" value="${taskText}" class="editable" />
      <button onclick="removeTask(this)">Remove</button>
    `;
  
    taskList.appendChild(taskItem);
    taskInput.value = ""; // Clear input field after adding
  }
  
  function removeTask(button) {
    const taskItem = button.parentNode;
    taskItem.remove();
  }
  
  // Goals Section Functionality
  function addGoal() {
    const goalInput = document.getElementById('newGoalInput');
    const goalText = goalInput.value;
  
    if (goalText === "") return;
  
    const goalsSection = document.getElementById('goalsSection');
    const goalNote = document.createElement('div');
    goalNote.className = 'sticky-note';
  
    goalNote.innerHTML = `
      <input type="text" value="${goalText}" class="editable-goal" />
      <button onclick="removeGoal(this)">Remove</button>
    `;
  
    goalsSection.appendChild(goalNote);
    goalInput.value = ""; // Clear input field after adding
  }
  
  function removeGoal(button) {
    const goalNote = button.parentNode;
    goalNote.remove();
  }
  