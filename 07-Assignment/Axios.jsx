import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);      // For storing API data
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState("");    // For error message

  useEffect(() => {
    // Fetch data from a public API
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);     // Store the data
        setLoading(false);          // Stop loading
      })
      .catch((err) => {
        setError("Error fetching data!"); // Set error message
        setLoading(false);
      });
  }, []);

  // Loading state
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Error state
  if (error) {
    return <h2>{error}</h2>;
  }

  // Display data
  return (
    <div style={{ padding: "20px" }}>
      <h1>Fetched Posts</h1>
      {data.slice(0, 5).map((post) => (
        <div key={post.id} style={{ marginBottom: "15px" }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
