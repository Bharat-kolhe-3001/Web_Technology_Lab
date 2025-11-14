<?php
$conn = new mysqli('localhost','root','','bt1');
if($conn->connect_errno){
    echo "Connection Failed";
    exit();
}

//insert function 

function insertStudent($conn, $id, $name){
    $stat = $conn->prepare("INSERT INTO student (id, name) VALUES (?, ?)");
    $stat->bind_param("is", $id, $name);
    if($stat->execute()){ 
        echo "<p>Record Inserted Successfully (ID=$id, Name=$name)</p>";
    }
}.  




function deleteStudent($conn, $id){
    $stat = $conn->prepare("DELETE FROM student WHERE id=?");
    $stat->bind_param("i", $id);
    if($stat->execute()){
        echo "<p>Record Deleted Successfully (ID=$id)</p>";
    } 
}

 
function updateStudent($conn, $oldid, $newname){
    $stat = $conn->prepare("UPDATE student SET name=? WHERE id=?");
    $stat->bind_param("si", $newname, $oldid);
    if($stat->execute()){
        echo "<p>Record Updated Successfully (ID=$oldid → New Name=$newname)</p>";
    }
}

 
function displayStudents($conn){
    $result = $conn->query("SELECT * FROM student");
    if($result->num_rows > 0){
        echo "<table border='1' cellpadding='5'>
                <tr><th>ID</th><th>Name</th></tr>";
        while($row = $result->fetch_assoc()){
            echo "<tr><td>".$row['id']."</td><td>".$row['name']."</td></tr>";
        }
        echo "</table>";
    } else {
        echo "<p>No Records Found</p>";
    }
}

 
$action = $_POST['action'] ?? "";
$id     = $_POST['sid'] ?? "";
$name   = $_POST['sname'] ?? "";
$oldid  = $_POST['oldid'] ?? "";
$newname= $_POST['newname'] ?? "";

if($action == "insert") insertStudent($conn, $id, $name);
if($action == "delete") deleteStudent($conn, $id);
if($action == "update") updateStudent($conn, $oldid, $newname);
if($action == "display" || $action == "insert" || $action == "delete" || $action == "update"){
    displayStudents($conn);
}
?>


