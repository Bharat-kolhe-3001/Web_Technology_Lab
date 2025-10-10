import { useState } from "react";

function UserRegistrationForm() {
 
  let [userData, setUserData] = useState({ firstName: "", lastName: "" });

 
  let [errorMessage, setErrorMessage] = useState("");


  function handleSubmit() {
    if (userData.firstName === "" || userData.lastName === "") {
      setErrorMessage("Please fill all the fields");
    } else {
      setErrorMessage("");
      alert("Form submitted successfully");
    }
  }

  return (
    <>
      <h1>Welcome To User Registration Form</h1>

      <label>First Name:</label>
      <input
        type="text"
        value={userData.firstName}
        onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
      />
      <br />
      <br />

      <label>Last Name:</label>
      <input
        type="text"
        value={userData.lastName}
        onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
      />
      <br />
      <br />

      <h2>
        Hello, {userData.firstName} {userData.lastName}!
      </h2>

      <button type="button" onClick={handleSubmit}>
        Submit
      </button>

      <p style={{ color: "red" }}>{errorMessage}</p>
    </>
  );
}

export default UserRegistrationForm;
