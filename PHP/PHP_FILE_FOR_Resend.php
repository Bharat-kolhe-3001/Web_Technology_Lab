<?php

$name = $_POST['sname'] ;
$marks = $_POST['smarks'];
//

$arr = ["StudentName" => $name,
    "StudentMarks" => $marks];


header('Content-Type: application/json');


echo json_encode($arr);
?>
