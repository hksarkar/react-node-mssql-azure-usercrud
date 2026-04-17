import React, { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const PojectManagementCharts = () => {
  const [users, setUsers] = useState([]);
  const [projectFilter, setProjectFilter] = useState("All");

  useEffect(() => {
    const dummyData = [
      {
        Id: 1,
        Name: "Rahul",
        Role: "Frontend Dev",
        Project: "E-Commerce",
        Status: "Completed",
        Hours: 120,
        Outcome: "Success",
        City: "Bangalore",
      },
      {
        Id: 2,
        Name: "Sneha",
        Role: "Backend Dev",
        Project: "Banking App",
        Status: "In Progress",
        Hours: 90,
        Outcome: "Pending",
        City: "Mumbai",
      },
      {
        Id: 3,
        Name: "Amit",
        Role: "QA",
        Project: "E-Commerce",
        Status: "Completed",
        Hours: 60,
        Outcome: "Success",
        City: "Delhi",
      },
      {
        Id: 4,
        Name: "Priya",
        Role: "Fullstack",
        Project: "HR Tool",
        Status: "In Progress",
        Hours: 110,
        Outcome: "Pending",
        City: "Bangalore",
      },
      {
        Id: 5,
        Name: "John",
        Role: "DevOps",
        Project: "Banking App",
        Status: "Completed",
        Hours: 80,
        Outcome: "Success",
        City: "Chennai",
      },
    ];
    setUsers(dummyData);
  }, []);

  const filteredUsers =
    projectFilter === "All"
      ? users
      : users.filter((u) => u.Project === projectFilter);

  // KPIs
  const totalUsers = filteredUsers.length;
  const totalProjects = new Set(filteredUsers.map((u) => u.Project)).size;
  const completed = filteredUsers.filter(
    (u) => u.Status === "Completed",
  ).length;
  const totalHours = filteredUsers.reduce((sum, u) => sum + u.Hours, 0);

  // Status Chart
  const statusData = {};
  filteredUsers.forEach((u) => {
    statusData[u.Status] = (statusData[u.Status] || 0) + 1;
  });

  const statusChart = {
    labels: Object.keys(statusData),
    datasets: [
      {
        label: "Project Status",
        data: Object.values(statusData),
        backgroundColor: ["#4CAF50", "#2196F3", "#FF9800"],
      },
    ],
  };

  // Project Resource Chart
  const projectData = {};
  filteredUsers.forEach((u) => {
    projectData[u.Project] = (projectData[u.Project] || 0) + 1;
  });

  const projectChart = {
    labels: Object.keys(projectData),
    datasets: [
      {
        label: "Resources per Project",
        data: Object.values(projectData),
        backgroundColor: "#36A2EB",
      },
    ],
  };

  // Outcome Chart
  const outcomeData = {};
  filteredUsers.forEach((u) => {
    outcomeData[u.Outcome] = (outcomeData[u.Outcome] || 0) + 1;
  });

  const outcomeChart = {
    labels: Object.keys(outcomeData),
    datasets: [
      {
        label: "Outcome",
        data: Object.values(outcomeData),
        backgroundColor: ["#4CAF50", "#FF9800"],
      },
    ],
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Project Management Analytics Dashboard
      </Typography>

      {/* Filter */}
      <div style={{ marginBottom: "20px" }}>
        <label>Filter by Project: </label>
        <select onChange={(e) => setProjectFilter(e.target.value)}>
          <option value="All">All</option>
          {[...new Set(users.map((u) => u.Project))].map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </div>

      {/* KPI Cards */}
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography>Total Employees</Typography>
              <Typography variant="h5">{totalUsers}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography>Projects</Typography>
              <Typography variant="h5">{totalProjects}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography>Completed</Typography>
              <Typography variant="h5">{completed}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography>Total Hours</Typography>
              <Typography variant="h5">{totalHours}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Charts */}
      <Grid container spacing={3} style={{ marginTop: "20px" }}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography>Project Status</Typography>
              <Bar data={statusChart} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography>Resources per Project</Typography>
              <Bar data={projectChart} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography>Outcome Analysis</Typography>
              <Pie data={outcomeChart} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Table */}
      <div style={{ marginTop: "30px" }}>
        <Typography variant="h6">Employee Details</Typography>
        <table border="1" width="100%">
          <thead>
            <tr>
              <th>Name</th>
              <th>Project</th>
              <th>Status</th>
              <th>Hours</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((u) => (
              <tr key={u.Id}>
                <td>{u.Name}</td>
                <td>{u.Project}</td>
                <td>{u.Status}</td>
                <td>{u.Hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Insight */}
      <div style={{ marginTop: "20px" }}>
        <Typography>
          Insight: Most projects are in progress, with strong resource
          allocation in Bangalore.
        </Typography>
      </div>
    </div>
  );
};

export default PojectManagementCharts;
