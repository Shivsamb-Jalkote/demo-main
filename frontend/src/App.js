import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const URL = "http://13.235.214.163:3000";

function App() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${URL}/user`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const postData = async () => {
    try {
      await axios.post(`${URL}/user`, { data: inputValue });
      fetchData();
      setInputValue(""); // Optional: clear input field
    } catch (error) {
      console.error("Error submitting user:", error);
    }
  };

  const dbinit = async () => {
    try {
      await axios.post(`${URL}/dbinit`);
    } catch (error) {
      console.error("Error initializing DB:", error);
    }
  };

  const tbinit = async () => {
    try {
      await axios.post(`${URL}/tbinit`);
    } catch (error) {
      console.error("Error initializing table:", error);
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>📄 Assignment Submission Form</h1>
      </header>

      <main>
        <form className="user-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Enter your name"
            value={inputValue}
            onChange={handleChange}
          />
          <button className="submit-btn" onClick={postData}>
            Submit
          </button>
        </form>

        <div className="init-buttons">
          <button className="db-btn" onClick={dbinit}>DB Init</button>
          <button className="table-btn" onClick={tbinit}>Table Init</button>
        </div>

        <section className="user-list">
          <h2>📋 Users List</h2>
          <table>
            <thead>
              <tr><th>ID</th><th>Name</th></tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

      <footer>
        © Vikas G. Patil. All rights reserved.<br />
        Application developed by Vikas.
      </footer>
    </div>
  );
}

export default App;
