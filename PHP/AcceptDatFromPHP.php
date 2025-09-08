<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="inputcontainer">
    <form>
      Enter name <input type="text" id="id1">

      Enter Marks <input type="text" id="id2">
      <button id="btn" type="button">Submit</button>
    </form>
  </div>

  <script>
    async function senddata() {
      let x = document.getElementById("id1").value;

      let y = document.getElementById("id2").value;

      let formdata1 = new FormData();//FormData is Inbuild class for accepting Response
      formdata1.append("sname", x);  
      formdata1.append("smarks", y); 

    
        let response = await fetch("http://localhost/Backend.php", {
          method: "POST",
          body: formdata1
        });

        let result = await response.json(); 
        console.log(result); 
    
    }

   
    document.getElementById("btn").addEventListener("click", senddata);
  </script>
</body>
</html>
