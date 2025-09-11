<?php
$id = $_POST['sid'] ?? "";
$name = $_POST['sname'] ?? "";
$action = $_POST['action'] ?? "";

$conn = new mysqli('localhost','root','','bt1');
if($conn->connect_errno){
    echo "Connection Failed";
    exit();
}

if($action == "insert"){
    $stat = $conn->prepare("INSERT INTO student (id, name) VALUES (?, ?)");
    $stat->bind_param("is", $id, $name);
    if($stat->execute()){
        echo "<p>Data Inserted Successfully</p>";
    }
}

if($action == "delete"){
    $stat = $conn->prepare("DELETE FROM student WHERE id=?");
    $stat->bind_param("i", $id);
    if($stat->execute()){
        echo "<p>Data Deleted Successfully</p>";
    }
}

if($action == "update"){
    $stat = $conn->prepare("UPDATE student SET name=? WHERE id=?");
    $stat->bind_param("si", $name, $id);
    if($stat->execute()){
        echo "<p>Data Updated Successfully</p>";
    }
}

if($action == "display"){
    $result = $conn->query("SELECT * FROM student");
    if($result->num_rows > 0){
        echo "<table border='1' cellpadding='5'>
                <tr><th>Id</th><th>Name</th></tr>";
        while($row = $result->fetch_assoc()){
            echo "<tr><td>".$row['id']."</td><td>".$row['name']."</td></tr>";
        }
        echo "</table>";
    } else {
        echo "<p>No Records Found</p>";
    }
}
?>
