<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form id="Form">
        <div class="input">
            Enter Id <input type="text" id="id" placeholder="Enter Your Id">
            Enter Name  <input type="text" id="Name" placeholder="Enter Your Name"><br><br>
            <h1 id="Menu">MENU</h1>
            <hr>
        </div>

        <div class="card">
            <button type="button" id="insertbtn">Insert</button><br>
            <button type="button" id="displaybtn">Display</button><br>
            <button type="button" id="updatebtn">Update</button><br>
            <button type="button" id="deletebtn">Delete</button><br>
            <hr>
        </div>
    </form>

     
    <div id="result"></div>

    <script>
        async function sendData(action) {
            let id = document.getElementById("id").value;
            let name = document.getElementById("Name").value;

            let FormData1 = new FormData();
            FormData1.append("sid", id);
            FormData1.append("sname", name);
            FormData1.append("action", action);

            let response = await fetch("http://localhost/Assignemnt_No_4_PHP.php", {
                method: "POST",
                body: FormData1
            });

            let result = await response.text();
            document.getElementById("result").innerHTML = result;
        }

        document.getElementById("insertbtn").addEventListener("click", () => sendData("insert"));
        document.getElementById("displaybtn").addEventListener("click", () => sendData("display"));
        document.getElementById("updatebtn").addEventListener("click", () => sendData("update"));
        document.getElementById("deletebtn").addEventListener("click", () => sendData("delete"));
    </script>
</body>
</html>
