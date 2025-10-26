<?php

 header("Content-Type: application/json");

 $rawData = file_get_contents('php://input');//accept dat from frontend

 $data = json_decode($rawData,  true);//json data convert into addreasing array

 echo json_encode($data);//addreasing array convert into json file 


?>

