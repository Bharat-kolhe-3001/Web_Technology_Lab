<?php

 header("Content-Type: application/json");

 $rawData = file_get_contents('php://input');

 $data = json_decode($rawData,  true);

 echo json_encode($data);

?>