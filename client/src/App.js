import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddUser from "./AddUser";
import PojectManagementCharts from "./PojectManagementCharts";

function App() {
  return (
    <Router>
      {/* Navigation */}
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/">AddUser</Link> |
        <Link to="/dashboard">Charts:Project Management</Link>
      </nav>

      {/* Pages */}
      <Routes>
        <Route path="/" element={<AddUser />} />

        <Route path="/dashboard" element={<PojectManagementCharts />} />
      </Routes>
    </Router>
  );
}

export default App;
