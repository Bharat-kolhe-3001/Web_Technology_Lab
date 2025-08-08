
let taskInput = document.getElementById('taskInput');
let taskDate = document.getElementById('taskDate');
let addBtn = document.getElementById('addBtn');
let taskBody = document.getElementById('taskBody');



addBtn.addEventListener('click', function () {
    let task = taskInput.value;
    let date = taskDate.value;

    if (task === '' || date === '') {
        alert("Please enter both task and date.");
        return;
    }

    addTaskToTable(task, date);

    
    taskInput.value = '';
    taskDate.value = '';
});




function addTaskToTable(task, date) {
   
    
    let row = document.createElement('tr');

    row.innerHTML = `
        <td>${task}</td>
        <td>${date}</td>
        <td><input type="checkbox" onchange="markCompleted(this)"></td>
        <td><button class="delete-btn" onclick="deleteTask(this)">Delete</button></td>
    `;

    taskBody.appendChild(row);
}


function markCompleted(checkbox) {
    let row = checkbox.closest('tr');
    if (checkbox.checked) {
        row.classList.add('completed');
    } else {
        row.classList.remove('completed');
    }
}


function deleteTask(button) {
    let row = button.closest('tr');
    row.remove();

}
