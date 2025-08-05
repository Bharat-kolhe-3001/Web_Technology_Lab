document.getElementById("addBtn").addEventListener("click", function () {
    let title = document.getElementById("taskInput").value;
    let date = document.getElementById("taskDate").value;
    let taskBody = document.getElementById("taskBody");

    if (title.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    
    let empty = document.querySelector(".empty-state");
    if (empty) {
        taskBody.removeChild(empty);
    }

 
    let row = document.createElement("tr");

 
    let taskCell = document.createElement("td");
    taskCell.textContent = title;

 
    let dateCell = document.createElement("td");
    dateCell.textContent = date;

 
    let checkCell = document.createElement("td");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        if (this.checked) {
            taskCell.style.textDecoration = "line-through";
            taskCell.style.color = "#888";
        } else {
            taskCell.style.textDecoration = "none";
            taskCell.style.color = "#000";
        }
    });
    checkCell.appendChild(checkbox);

  
    let deleteCell = document.createElement("td");
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.backgroundColor = "red";
    deleteBtn.style.color = "white";
    deleteBtn.style.border = "none";
    deleteBtn.style.padding = "5px 10px";
    deleteBtn.style.cursor = "pointer";

   

    deleteCell.appendChild(deleteBtn);

  
    row.appendChild(taskCell);
    row.appendChild(dateCell);
    row.appendChild(checkCell);
    row.appendChild(deleteCell);


    taskBody.appendChild(row);

   
    document.getElementById("taskInput").value = "";
    document.getElementById("taskDate").value = "";
});
