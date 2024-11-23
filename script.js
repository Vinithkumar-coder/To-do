// script.js

const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const nextPageButton = document.getElementById('nextPageButton');

// Add Task to Local Storage
addButton.addEventListener('click', () => {
    const task = todoInput.value.trim();
    if (task) {
        // Get existing tasks from local storage
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task); // Add the new task
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Save to local storage
        todoInput.value = ''; // Clear input
        alert('Task added!');
    } else {
        alert('Please enter a valid task!');
    }
});

// Navigate to Next Page
nextPageButton.addEventListener('click', () => {
    window.location.href = 'next.html';
});


