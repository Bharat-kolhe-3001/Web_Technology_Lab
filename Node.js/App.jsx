import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  async function read() {
    try {
    
      const res = await fetch("/data.json");
      const jsonData = await res.json();
      console.log(jsonData);
      setData(jsonData);
    } catch (error) {
      console.log("Error loading data:", error);
    }
  }

  return (
    <>
      <button onClick={read}>Read</button>

      <table border="1" style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Age</th><th>City</th>
          </tr>
        </thead>
        <tbody>
          {data.map((obj) => (
            <tr key={obj.id}>
              <td>{obj.id}</td>
              <td>{obj.name}</td>
              <td>{obj.age}</td>
              <td>{obj.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
