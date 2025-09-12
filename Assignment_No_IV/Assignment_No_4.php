<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Student CRUD</title>
</head>
<body>
  <h2>Student Management</h2>


  <div>
    <h3>Insert Student</h3>
    Id: <input type="text" id="insert_id"><br><br>
    Name: <input type="text" id="insert_name"><br><br>
    <button onclick="insertData()">Insert</button>
  </div>
  <hr>


  <div>
    <h3>Delete Student</h3>
    Id: <input type="text" id="delete_id"><br><br>
    <button onclick="deleteData()">Delete</button>
  </div>
  <hr>

 
  <div>
    <h3>Update Student</h3>
    Old Id : <input type="text" id="old_id"><br><br>
    New Name: <input type="text" id="new_name"><br><br>
    <button onclick="updateData()">Update</button>
  </div>
  <hr>


  <div>
    <h3>All Students</h3>
    <button onclick="displayData()">Display</button>
  </div>

  <hr>
  <div id="result"></div>

  <script>
    async function insertData() {
      let fd = new FormData();
      fd.append("action", "insert");
      fd.append("sid", document.getElementById("insert_id").value);
      fd.append("sname", document.getElementById("insert_name").value);

      let res = await fetch("http://localhost/Assignment_No_4_PHP.php", { method: "POST", body: fd });
      document.getElementById("result").innerHTML = await res.text();
    }

    async function deleteData() {
      let fd = new FormData();
      fd.append("action", "delete");
      fd.append("sid", document.getElementById("delete_id").value);

      let res = await fetch("http://localhost/Assignment_No_4_PHP.php", { method: "POST", body: fd });
      document.getElementById("result").innerHTML = await res.text();
    }

    async function updateData() {
      let fd = new FormData();
      fd.append("action", "update");
      fd.append("oldid", document.getElementById("old_id").value);
      fd.append("newname", document.getElementById("new_name").value);

      let res = await fetch("http://localhost/Assignment_No_4_PHP.php", { method: "POST", body: fd });
      document.getElementById("result").innerHTML = await res.text();
    }

    async function displayData() {
      let fd = new FormData();
      fd.append("action", "display");

      let res = await fetch("http://localhost/Assignment_No_4_PHP.php", { method: "POST", body: fd });
      document.getElementById("result").innerHTML = await res.text();
    }
  </script>
</body>
</html>
