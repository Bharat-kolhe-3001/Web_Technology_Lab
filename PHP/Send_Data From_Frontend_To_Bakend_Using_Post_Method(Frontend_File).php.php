<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form>
    Enter Name: <input type="text" id="name"/>
    Enter Color: <input type="text" id="colorname"/>
    <button id="btn1" type="button">Submit</button>
  </form>
  
<script>
  async function sendData() {
    const name = document.getElementById("name").value;
    const color = document.getElementById("colorname").value;

     const data = { name1: name, color1: color };

    const response = await fetch("http://localhost/server.php", {
      method: "POST",    
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)  
    });

    const responseData = await response.json();
    console.log(responseData);
  }

   
  document.getElementById("btn1").addEventListener("click", sendData);
</script>
</body>
</html>
