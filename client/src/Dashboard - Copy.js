import React, { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const dummyData = [
      { Id: 1, Name: "John", Age: 25, City: "Bangalore" },
      { Id: 2, Name: "Alice", Age: 30, City: "Mumbai" },
      { Id: 3, Name: "Bob", Age: 22, City: "Delhi" },
      { Id: 4, Name: "David", Age: 28, City: "Bangalore" },
      { Id: 5, Name: "Emma", Age: 35, City: "Mumbai" },
    ];
    setUsers(dummyData);
  }, []);

  const totalUsers = users.length;
  const avgAge = users.reduce((sum, u) => sum + u.Age, 0) / users.length || 0;

  const cityData = {};
  users.forEach((u) => {
    cityData[u.City] = (cityData[u.City] || 0) + 1;
  });

  const cityChart = {
    labels: Object.keys(cityData),
    datasets: [{ label: "Users by City", data: Object.values(cityData) }],
  };

  const ageData = {};
  users.forEach((u) => {
    ageData[u.Age] = (ageData[u.Age] || 0) + 1;
  });

  const ageChart = {
    labels: Object.keys(ageData),
    datasets: [
      {
        label: "Age Distribution",
        data: Object.values(ageData),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        User Analytics Dashboard
      </Typography>

      {/* KPI Cards */}
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Users</Typography>
              <Typography variant="h4">{totalUsers}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Average Age</Typography>
              <Typography variant="h4">{avgAge.toFixed(1)}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Charts */}
      <Grid container spacing={3} style={{ marginTop: "20px" }}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography>Users by City</Typography>
              <Bar data={cityChart} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography>Age Distribution</Typography>
              <Pie data={ageChart} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
