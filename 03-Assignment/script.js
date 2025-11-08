 
const button = document.getElementById("loadBtn");
const resultDiv = document.getElementById("result");

 
button.addEventListener("click", fetchUsers);

 
async function fetchUsers() {
  try {
     
    let response = await fetch("https://jsonplaceholder.typicode.com/users");

   
    let users = await response.json();
 
    resultDiv.innerHTML = "";
 
    let table = document.createElement("table"); 
    table.border = "2"; 

   
    let header = document.createElement("tr");
    header.innerHTML = "<th>ID</th><th>Name</th><th>Email</th><th>Phone</th>";
    table.appendChild(header);

  
    users.forEach(user => {
      let row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
      `;
      table.appendChild(row);
    });

     
    resultDiv.appendChild(table);

  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

