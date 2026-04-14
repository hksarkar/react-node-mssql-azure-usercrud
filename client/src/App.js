import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

function App() {
  const API_URL = process.env.REACT_APP_API_URL;
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", age: "" });

  // ✅ Wrap in useCallback so the function reference stays stable
  const fetchUsers = useCallback(async () => {
    const res = await axios.get(API_URL + "/api/users");
    setUsers(res.data);
  }, [API_URL]); // API_URL is the only external dependency

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const addUser = async () => {
    if (!form.name || !form.email || !form.age) {
      alert("Please fill all fields");
      return;
    }

    await axios.post(API_URL + "/api/users", form);
    setForm({ name: "", email: "", age: "" });
    fetchUsers();
  };

  const deleteUser = async (id) => {
    await axios.delete(`${API_URL}/api/users/${id}`);
    fetchUsers();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Management System Form ::</h2>
      <div style={{ marginBottom: "10px" }}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          placeholder="Age"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />

        <button onClick={addUser}>Add User</button>
      </div>

      <ul>
        {users.map((u) => (
          <li key={u.Id}>
            <b>{u.Name}</b> ({u.Email}) - Age: {u.Age}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => deleteUser(u.Id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
