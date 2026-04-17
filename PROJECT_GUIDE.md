# 📘 User CRUD Full Stack Application - Complete Project Guide

## 🎯 Project Overview

A full-stack web application for managing users with CRUD operations, featuring a modern React frontend, Node.js/Express backend, Microsoft SQL Server database, Azure cloud deployment, and Power BI analytics dashboard.

### **Tech Stack**

#### Frontend

- **React** 19.2.4 - UI library
- **React Router DOM** 7.14.1 - Client-side routing
- **Axios** 1.14.0 - HTTP client
- **Material-UI** 9.0.0 - UI components
- **Chart.js** 4.5.1 - Data visualization
- **React-ChartJS-2** 5.3.1 - React wrapper for Chart.js

#### Backend

- **Node.js** - Runtime environment
- **Express** 5.2.1 - Web framework
- **MSSQL** 12.2.1 - SQL Server driver
- **CORS** 2.8.6 - Cross-origin resource sharing
- **dotenv** 17.4.2 - Environment variables

#### Database

- **Microsoft SQL Server** (Local: SQL Express, Cloud: Azure SQL)
- **Stored Procedures** for data operations

#### Cloud & DevOps

- **Azure App Service** - Backend hosting
- **Azure SQL Database** - Cloud database
- **Azure DevOps** - CI/CD pipeline
- **Power BI** - Business intelligence dashboard

---

## 📁 Project Structure

```
UserCrudMssql/
├── client/                          # React Frontend
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── App.js                   # Main app with routing
│   │   ├── AddUser.js               # User CRUD interface
│   │   ├── PojectManagementCharts.js # Analytics dashboard
│   │   ├── index.js                 # Entry point
│   │   └── App.css                  # Styles
│   ├── package.json
│   └── .env                         # Frontend environment variables
│
├── server/                          # Node.js Backend
│   ├── routes/
│   │   └── userRoutes.js            # API endpoints
│   ├── db.js                        # Database connection
│   ├── server.js                    # Express server
│   ├── package.json
│   └── .env                         # Backend environment variables
│
├── Azure_Steps/                     # Azure deployment guides
│   ├── Day 1 Azure Basics.docx
│   ├── Day 2 Deploy Backend.docx
│   ├── Day 3 Azure SQL Database.docx
│   ├── Day 4 Frontend Deployment.docx
│   └── Day 5 CICD with Azure DevOps.docx
│
├── Power_BI_Steps/                  # Power BI documentation
│   └── Day1_Connect your Azure DB.docx
│
├── azure-pipelines.yml              # CI/CD configuration
└── README.md
```

---

## 🏗️ Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                         CLIENT TIER                          │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  React Application (Port 3000)                         │ │
│  │  - User Management Interface (AddUser.js)              │ │
│  │  - Analytics Dashboard (PojectManagementCharts.js)     │ │
│  │  - React Router for Navigation                         │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                            ↓ HTTP/HTTPS
                    (Axios API Calls)
┌─────────────────────────────────────────────────────────────┐
│                       APPLICATION TIER                       │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Node.js + Express API (Port 9000)                     │ │
│  │  - REST API Endpoints                                  │ │
│  │  - CORS Middleware                                     │ │
│  │  - Routes: /api/users (GET, POST, DELETE)             │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                            ↓ MSSQL Driver
                    (Stored Procedures)
┌─────────────────────────────────────────────────────────────┐
│                         DATA TIER                            │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Microsoft SQL Server                                  │ │
│  │  - Database: PracticeDB (Local) / Azure SQL (Cloud)   │ │
│  │  - Table: Users (Id, Name, Email, Age)                │ │
│  │  - Stored Procedures:                                  │ │
│  │    • GetUsers                                          │ │
│  │    • AddUser                                           │ │
│  │    • DeleteUser                                        │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                      ANALYTICS TIER                          │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Power BI Dashboard                                    │ │
│  │  - Connected to Azure SQL Database                     │ │
│  │  - Real-time data visualization                        │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      DEPLOYMENT TIER                         │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Azure Cloud Services                                  │ │
│  │  - Azure App Service (Backend)                         │ │
│  │  - Azure Static Web Apps (Frontend)                    │ │
│  │  - Azure SQL Database                                  │ │
│  │  - Azure DevOps (CI/CD Pipeline)                       │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

---

## 🚀 Getting Started - Local Development

### **Prerequisites**

Before you begin, ensure you have the following installed:

1. **Node.js** (v18.x or v20.x)
   - Download: https://nodejs.org/
   - Verify: `node --version`

2. **npm** (comes with Node.js)
   - Verify: `npm --version`

3. **Microsoft SQL Server**
   - SQL Server Express (free): https://www.microsoft.com/en-us/sql-server/sql-server-downloads
   - SQL Server Management Studio (SSMS): https://aka.ms/ssmsfullsetup

4. **Git** (optional, for version control)
   - Download: https://git-scm.com/

5. **Visual Studio Code** (recommended IDE)
   - Download: https://code.visualstudio.com/

---

## 💾 Database Setup

### **Step 1: Create Database**

Open SQL Server Management Studio (SSMS) and connect to your local SQL Server instance.

```sql
-- Create database
CREATE DATABASE PracticeDB;
GO

-- Use the database
USE PracticeDB;
GO
```

### **Step 2: Create Users Table**

```sql
-- Create Users table
CREATE TABLE Users (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL,
    Age INT NOT NULL
);
GO
```

### **Step 3: Create Stored Procedures**

#### **GetUsers - Retrieve all users**

```sql
CREATE PROCEDURE GetUsers
AS
BEGIN
    SELECT Id, Name, Email, Age
    FROM Users
    ORDER BY Id DESC;
END
GO
```

#### **AddUser - Insert new user**

```sql
CREATE PROCEDURE AddUser
    @Name NVARCHAR(100),
    @Email NVARCHAR(100),
    @Age INT
AS
BEGIN
    INSERT INTO Users (Name, Email, Age)
    VALUES (@Name, @Email, @Age);
END
GO
```

#### **DeleteUser - Remove user by ID**

```sql
CREATE PROCEDURE DeleteUser
    @Id INT
AS
BEGIN
    DELETE FROM Users WHERE Id = @Id;
END
GO
```

### **Step 4: Insert Sample Data (Optional)**

```sql
-- Insert test data
EXEC AddUser @Name = 'John Doe', @Email = 'john@example.com', @Age = 25;
EXEC AddUser @Name = 'Jane Smith', @Email = 'jane@example.com', @Age = 30;
EXEC AddUser @Name = 'Bob Johnson', @Email = 'bob@example.com', @Age = 28;
GO

-- Verify data
EXEC GetUsers;
GO
```

---

## 🔧 Backend Setup (Node.js + Express)

### **Step 1: Navigate to Server Directory**

```bash
cd server
```

### **Step 2: Install Dependencies**

```bash
npm install
```

This installs:

- `express` - Web framework
- `mssql` - SQL Server driver
- `cors` - Enable cross-origin requests
- `dotenv` - Environment variable management

### **Step 3: Configure Environment Variables**

Create a `.env` file in the `server` directory:

```env
# Local Development Configuration
DB_USER=testuser
DB_PASS=Test@123456789
DB_SERVER=localhost\\SQLEXPRESS
DB_NAME=PracticeDB

# Server Port
PORT=9000
```

**Note:** For Azure deployment, these will be different (covered in Azure section).

### **Step 4: Database Connection (db.js)**

The `db.js` file handles the SQL Server connection:

```javascript
const sql = require("mssql");

// Configuration from environment variables
const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    trustServerCertificate: true, // For local development
    encrypt: true, // Required for Azure
  },
};

// Create connection pool
const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log("✅ Connected to MSSQL");
    return pool;
  })
  .catch((err) => {
    console.error("❌ DB Connection Failed:", err);
  });

module.exports = { sql, poolPromise };
```

### **Step 5: API Routes (routes/userRoutes.js)**

```javascript
const express = require("express");
const router = express.Router();
const { sql, poolPromise } = require("../db");

// GET /api/users - Retrieve all users
router.get("/", async (req, res) => {
  try {
    const pool = await poolPromise;
    if (!pool) {
      return res.status(500).send("DB not connected");
    }
    const result = await pool.request().execute("GetUsers");
    res.json(result.recordset);
  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).send(err.message);
  }
});

// POST /api/users - Add new user
router.post("/", async (req, res) => {
  const { name, email, age } = req.body;
  const pool = await poolPromise;

  await pool
    .request()
    .input("Name", sql.NVarChar, name)
    .input("Email", sql.NVarChar, email)
    .input("Age", sql.Int, age)
    .execute("AddUser");

  res.send("User added");
});

// DELETE /api/users/:id - Delete user
router.delete("/:id", async (req, res) => {
  const pool = await poolPromise;

  await pool
    .request()
    .input("Id", sql.Int, req.params.id)
    .execute("DeleteUser");

  res.send("User deleted");
});

module.exports = router;
```

### **Step 6: Server Configuration (server.js)**

```javascript
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Start server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
```

### **Step 7: Start Backend Server**

```bash
npm start
```

**Expected Output:**

```
✅ Connected to MSSQL
🚀 Server running on http://localhost:9000
```

### **Step 8: Test API Endpoints**

#### Using Browser or Postman:

**GET all users:**

```
http://localhost:9000/api/users
```

**POST new user:**

```
POST http://localhost:9000/api/users
Content-Type: application/json

{
  "name": "Test User",
  "email": "test@example.com",
  "age": 25
}
```

**DELETE user:**

```
DELETE http://localhost:9000/api/users/1
```

---

## 🎨 Frontend Setup (React)

### **Step 1: Navigate to Client Directory**

```bash
cd client
```

### **Step 2: Install Dependencies**

```bash
npm install
```

This installs:

- `react` & `react-dom` - Core React libraries
- `react-router-dom` - Routing
- `axios` - HTTP client
- `@mui/material` - Material-UI components
- `chart.js` & `react-chartjs-2` - Charts

### **Step 3: Configure Environment Variables**

Create a `.env` file in the `client` directory:

```env
# Backend API URL
REACT_APP_API_URL=http://localhost:9000
```

**For production (Azure):**

```env
REACT_APP_API_URL=https://usercrud-api-yourname.azurewebsites.net
```

### **Step 4: Application Structure**

#### **App.js - Main Application with Routing**

```javascript
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
        <Link to="/dashboard">Charts: Project Management</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<AddUser />} />
        <Route path="/dashboard" element={<PojectManagementCharts />} />
      </Routes>
    </Router>
  );
}

export default App;
```

#### **AddUser.js - User Management Interface**

Key features:

- Display all users in a list
- Add new users via form
- Delete users
- Real-time updates

```javascript
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

function AddUser() {
  const API_URL = process.env.REACT_APP_API_URL;
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", age: "" });

  // Fetch users from API
  const fetchUsers = useCallback(async () => {
    const res = await axios.get(API_URL + "/api/users");
    setUsers(res.data);
  }, [API_URL]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // Add new user
  const addUser = async () => {
    if (!form.name || !form.email || !form.age) {
      alert("Please fill all fields");
      return;
    }
    await axios.post(API_URL + "/api/users", form);
    setForm({ name: "", email: "", age: "" });
    fetchUsers();
  };

  // Delete user
  const deleteUser = async (id) => {
    await axios.delete(`${API_URL}/api/users/${id}`);
    fetchUsers();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Management System</h2>

      {/* Add User Form */}
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

      {/* User List */}
      <ul>
        {users.map((u) => (
          <li key={u.Id}>
            <b>{u.Name}</b> ({u.Email}) - Age: {u.Age}
            <button onClick={() => deleteUser(u.Id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddUser;
```

#### **PojectManagementCharts.js - Analytics Dashboard**

Features:

- KPI cards (Total Employees, Projects, Completed, Hours)
- Bar charts for project status and resources
- Pie chart for outcome analysis
- Project filter dropdown
- Employee details table

Uses dummy data for demonstration purposes.

### **Step 5: Start Frontend Application**

```bash
npm start
```

The application will open at `http://localhost:3000`

### **Step 6: Test the Application**

1. **User Management Page** (`/`)
   - Add new users
   - View user list
   - Delete users

2. **Analytics Dashboard** (`/dashboard`)
   - View KPIs
   - Explore charts
   - Filter by project

---

## ☁️ Azure Deployment

### **Overview**

Deploy your application to Microsoft Azure cloud platform:

- **Backend** → Azure App Service
- **Database** → Azure SQL Database
- **Frontend** → Azure Static Web Apps (or App Service)
- **CI/CD** → Azure DevOps Pipelines

---

### **Day 1: Azure Basics**

#### **Objective**

Understand Azure structure and create foundational resources.

#### **Azure Hierarchy**

```
Subscription
    ↓
Resource Group (container for all resources)
    ↓
Resources (App Service, SQL Database, Storage, etc.)
```

#### **Step 1: Login to Azure Portal**

1. Go to: https://portal.azure.com
2. Sign in with your Microsoft account
3. If you don't have an account, create a free one (includes $200 credit)

#### **Step 2: Create Resource Group**

1. Search for **"Resource Groups"** in the top search bar
2. Click **"+ Create"**
3. Fill in details:
   - **Subscription:** Your Azure subscription
   - **Resource Group Name:** `usercrud-rg`
   - **Region:** Choose nearest (e.g., Central India, East US)
4. Click **"Review + Create"** → **"Create"**

✅ **Result:** You've created a container for all your project resources.

#### **Step 3: Create App Service (Backend Hosting)**

1. Search for **"App Service"**
2. Click **"+ Create"**
3. Fill in details:
   - **Resource Group:** `usercrud-rg`
   - **Name:** `usercrud-api-<yourname>` (must be globally unique)
   - **Publish:** Code
   - **Runtime stack:** Node 18 LTS or Node 20 LTS
   - **Operating System:** Linux
   - **Region:** Same as resource group
   - **Pricing Plan:** Free (F1) for testing
4. Click **"Review + Create"** → **"Create"**

⏳ Wait 2-3 minutes for deployment.

#### **Step 4: Verify App Service**

1. Go to your App Service resource
2. Find the **URL** (e.g., `https://usercrud-api-yourname.azurewebsites.net`)
3. Open it in browser
4. You should see a default Azure page

✅ **Day 1 Complete!** You've set up the foundation.

---

### **Day 2: Deploy Backend to Azure**

#### **Objective**

Deploy your Node.js API to Azure App Service.

#### **Prerequisites**

- ✅ Resource Group created
- ✅ App Service created
- ✅ Backend working locally

#### **Step 1: Install Azure CLI**

**Windows:**
Download from: https://aka.ms/installazurecliwindows

**macOS:**

```bash
brew install azure-cli
```

**Linux:**

```bash
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
```

**Verify installation:**

```bash
az --version
```

#### **Step 2: Login to Azure CLI**

```bash
az login
```

Or if browser doesn't open:

```bash
az login --use-device-code
```

Follow the instructions to authenticate.

#### **Step 3: Prepare Backend for Deployment**

Ensure your `server/package.json` has:

```json
{
  "scripts": {
    "start": "node server.js"
  }
}
```

Azure uses this to start your application.

#### **Step 4: Deploy Backend**

Navigate to server directory:

```bash
cd server
```

Deploy to Azure:

```bash
az webapp up --name usercrud-api-yourname --resource-group usercrud-rg --runtime "NODE:18-lts"
```

Replace `usercrud-api-yourname` with your actual App Service name.

If you need to specify location:

```bash
az webapp up --name usercrud-api-yourname --resource-group usercrud-rg --location southindia --runtime "NODE:18-lts"
```

⏳ **Deployment takes 2-5 minutes**

Azure will:

1. Zip your code
2. Upload to App Service
3. Install dependencies (`npm install`)
4. Start the server

#### **Step 5: Test Deployment**

Open your API URL:

```
https://usercrud-api-yourname.azurewebsites.net/api/users
```

⚠️ **Expected Issue:** Database connection will fail because we're still using local SQL Server.

**Temporary Test:** Add a simple route to verify deployment works:

```javascript
// In server.js, add before app.listen():
app.get("/", (req, res) => {
  res.send("API Running on Azure 🚀");
});
```

Redeploy and test: `https://usercrud-api-yourname.azurewebsites.net/`

#### **Step 6: View Logs (Troubleshooting)**

In Azure Portal:

1. Go to your App Service
2. Click **"Log stream"** in the left menu
3. View real-time logs

Or use CLI:

```bash
az webapp log tail --name usercrud-api-yourname --resource-group usercrud-rg
```

✅ **Day 2 Complete!** Backend is deployed (database connection pending).

---

### **Day 3: Azure SQL Database Setup**

#### **Objective**

Create Azure SQL Database and connect your backend to it.

#### **Step 1: Create Azure SQL Database**

1. In Azure Portal, search for **"SQL databases"**
2. Click **"+ Create"**
3. Fill in details:

**Basics:**

- **Resource Group:** `usercrud-rg`
- **Database Name:** `PracticeDB`
- **Server:** Click "Create new"
  - **Server name:** `usercrud-sql-server-<yourname>` (globally unique)
  - **Location:** Same as resource group
  - **Authentication:** SQL authentication
  - **Server admin login:** `sqladmin`
  - **Password:** Create a strong password (save it!)
- **Compute + storage:** Click "Configure database"
  - Choose **"Basic"** (cheapest option, ~$5/month)
  - Or **"Serverless"** for development

**Networking:**

- **Connectivity method:** Public endpoint
- **Allow Azure services:** Yes
- **Add current client IP:** Yes (important!)

4. Click **"Review + Create"** → **"Create"**

⏳ Wait 5-10 minutes for deployment.

#### **Step 2: Configure Firewall Rules**

1. Go to your SQL Server resource (not the database)
2. Click **"Networking"** in the left menu
3. Under **Firewall rules:**
   - Ensure **"Allow Azure services and resources to access this server"** is ON
   - Add your current IP if not already added
4. Click **"Save"**

#### **Step 3: Connect to Azure SQL Database**

**Using SQL Server Management Studio (SSMS):**

1. Open SSMS
2. Connect to server:
   - **Server name:** `usercrud-sql-server-yourname.database.windows.net`
   - **Authentication:** SQL Server Authentication
   - **Login:** `sqladmin`
   - **Password:** Your password
3. Click **"Connect"**

#### **Step 4: Create Database Schema**

Run the same SQL scripts from the local setup:

```sql
USE PracticeDB;
GO

-- Create Users table
CREATE TABLE Users (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL,
    Age INT NOT NULL
);
GO

-- Create stored procedures
CREATE PROCEDURE GetUsers
AS
BEGIN
    SELECT Id, Name, Email, Age FROM Users ORDER BY Id DESC;
END
GO

CREATE PROCEDURE AddUser
    @Name NVARCHAR(100),
    @Email NVARCHAR(100),
    @Age INT
AS
BEGIN
    INSERT INTO Users (Name, Email, Age) VALUES (@Name, @Email, @Age);
END
GO

CREATE PROCEDURE DeleteUser
    @Id INT
AS
BEGIN
    DELETE FROM Users WHERE Id = @Id;
END
GO

-- Insert sample data
EXEC AddUser @Name = 'John Doe', @Email = 'john@example.com', @Age = 25;
EXEC AddUser @Name = 'Jane Smith', @Email = 'jane@example.com', @Age = 30;
GO
```

#### **Step 5: Configure App Service Environment Variables**

1. Go to your App Service in Azure Portal
2. Click **"Configuration"** in the left menu
3. Under **"Application settings"**, click **"+ New application setting"**
4. Add these settings:

```
DB_USER = sqladmin
DB_PASS = YourStrongPassword
DB_SERVER = usercrud-sql-server-yourname.database.windows.net
DB_NAME = PracticeDB
```

5. Click **"Save"** at the top
6. Click **"Continue"** when prompted (app will restart)

#### **Step 6: Update Backend Code for Azure SQL**

Your `db.js` should already have this configuration:

```javascript
const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: true, // REQUIRED for Azure SQL
  },
};
```

#### **Step 7: Redeploy Backend**

```bash
cd server
az webapp up --name usercrud-api-yourname --resource-group usercrud-rg
```

#### **Step 8: Test API with Azure SQL**

```
https://usercrud-api-yourname.azurewebsites.net/api/users
```

✅ **Expected Response:**

```json
[
  {
    "Id": 2,
    "Name": "Jane Smith",
    "Email": "jane@example.com",
    "Age": 30
  },
  {
    "Id": 1,
    "Name": "John Doe",
    "Email": "john@example.com",
    "Age": 25
  }
]
```

✅ **Day 3 Complete!** Backend is connected to Azure SQL Database.

---

### **Day 4: Deploy Frontend to Azure**

#### **Objective**

Deploy React frontend to Azure Static Web Apps or App Service.

#### **Option A: Azure Static Web Apps (Recommended)**

**Step 1: Build React App**

```bash
cd client
npm run build
```

This creates an optimized production build in the `build/` folder.

**Step 2: Create Static Web App**

1. In Azure Portal, search for **"Static Web Apps"**
2. Click **"+ Create"**
3. Fill in details:
   - **Resource Group:** `usercrud-rg`
   - **Name:** `usercrud-frontend`
   - **Plan type:** Free
   - **Region:** Choose nearest
   - **Deployment source:** Other (we'll upload manually)
4. Click **"Review + Create"** → **"Create"**

**Step 3: Deploy Using Azure CLI**

Install Static Web Apps CLI:

```bash
npm install -g @azure/static-web-apps-cli
```

Deploy:

```bash
cd client
swa deploy ./build --app-name usercrud-frontend --resource-group usercrud-rg
```

**Step 4: Update Frontend Environment Variable**

Update `client/.env`:

```env
REACT_APP_API_URL=https://usercrud-api-yourname.azurewebsites.net
```

Rebuild and redeploy:

```bash
npm run build
swa deploy ./build --app-name usercrud-frontend --resource-group usercrud-rg
```

#### **Option B: Azure App Service (Alternative)**

**Step 1: Create App Service for Frontend**

```bash
az webapp up --name usercrud-frontend-yourname --resource-group usercrud-rg --runtime "NODE:18-lts" --location southindia
```

**Step 2: Configure for React**

Add startup command in App Service:

1. Go to App Service → Configuration → General settings
2. **Startup Command:** `pm2 serve /home/site/wwwroot/build --no-daemon --spa`

**Step 3: Deploy**

```bash
cd client
npm run build
az webapp up --name usercrud-frontend-yourname --resource-group usercrud-rg
```

#### **Step 5: Configure CORS on Backend**

Update `server/server.js`:

```javascript
const cors = require("cors");

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://usercrud-frontend.azurestaticapps.net",
      "https://usercrud-frontend-yourname.azurewebsites.net",
    ],
  }),
);
```

Redeploy backend.

✅ **Day 4 Complete!** Full-stack application is live on Azure.

---

### **Day 5: CI/CD with Azure DevOps**

#### **Objective**

Set up automated deployment pipeline.

#### **Step 1: Create Azure DevOps Organization**

1. Go to: https://dev.azure.com
2. Sign in with your Microsoft account
3. Create a new organization (if you don't have one)
4. Create a new project: `UserCrudApp`

#### **Step 2: Connect to GitHub/Azure Repos**

**Option A: Use Azure Repos**

1. In your project, go to **Repos**
2. Push your code to Azure Repos

**Option B: Use GitHub**

1. Keep your code on GitHub
2. Connect Azure DevOps to GitHub

#### **Step 3: Create Pipeline**

1. Go to **Pipelines** → **Create Pipeline**
2. Select your repository
3. Choose **"Existing Azure Pipelines YAML file"**
4. Select `azure-pipelines.yml`

#### **Step 4: Configure Pipeline YAML**

Your `azure-pipelines.yml`:

```yaml
trigger:
  - main

pool:
  vmImage: "ubuntu-latest"

steps:
  # Install Node.js
  - task: NodeTool@0
    inputs:
      versionSpec: "18.x"
    displayName: "Install Node.js"

  # Install dependencies
  - script: |
      cd server
      npm install
    displayName: "Install Backend Dependencies"

  # Deploy to Azure App Service
  - task: AzureWebApp@1
    inputs:
      azureSubscription: "<your-service-connection>"
      appName: "usercrud-api-yourname"
      package: "server"
    displayName: "Deploy Backend to Azure"
```

#### **Step 5: Create Service Connection**

1. Go to **Project Settings** → **Service connections**
2. Click **"New service connection"**
3. Select **"Azure Resource Manager"**
4. Choose **"Service principal (automatic)"**
5. Select your subscription and resource group
6. Name it: `AzureServiceConnection`
7. Click **"Save"**

#### **Step 6: Update Pipeline with Service Connection**

Replace `<your-service-connection>` in the YAML with your service connection name.

#### **Step 7: Run Pipeline**

1. Save and run the pipeline
2. Monitor the build and deployment
3. Pipeline will automatically deploy on every push to `main` branch

#### **Step 8: Add Frontend to Pipeline (Optional)**

```yaml
# Add after backend deployment
- script: |
    cd client
    npm install
    npm run build
  displayName: "Build Frontend"

- task: AzureStaticWebApp@0
  inputs:
    app_location: "client"
    output_location: "build"
  displayName: "Deploy Frontend"
```

✅ **Day 5 Complete!** CI/CD pipeline is configured.

---

## 📊 Power BI Integration

### **Objective**

Create a business intelligence dashboard connected to Azure SQL Database.

### **Step 1: Install Power BI Desktop**

Download from: https://powerbi.microsoft.com/desktop/

### **Step 2: Connect to Azure SQL Database**

1. Open Power BI Desktop
2. Click **"Get Data"** → **"Azure"** → **"Azure SQL Database"**
3. Enter connection details:
   - **Server:** `usercrud-sql-server-yourname.database.windows.net`
   - **Database:** `PracticeDB`
4. Click **"OK"**
5. Choose **"Database"** authentication
6. Enter credentials:
   - **User name:** `sqladmin`
   - **Password:** Your password
7. Click **"Connect"**

### **Step 3: Load Data**

1. Select the **Users** table
2. Click **"Load"**

### **Step 4: Create Visualizations**

**Example Dashboard Components:**

1. **Card Visual - Total Users**
   - Drag **Id** to the visual
   - Change aggregation to **Count**

2. **Bar Chart - Users by Age Group**
   - X-axis: Age (create bins: 20-30, 31-40, etc.)
   - Y-axis: Count of Id

3. **Table - User Details**
   - Add columns: Name, Email, Age

4. **Pie Chart - Age Distribution**
   - Legend: Age
   - Values: Count of Id

### **Step 5: Publish to Power BI Service**

1. Click **"Publish"** in the ribbon
2. Sign in to Power BI Service
3. Select a workspace
4. Click **"Select"**

### **Step 6: Configure Scheduled Refresh**

1. Go to Power BI Service (app.powerbi.com)
2. Find your dataset
3. Click **"Settings"** → **"Scheduled refresh"**
4. Configure refresh frequency
5. Enter Azure SQL credentials

✅ **Power BI Integration Complete!**

---

## 🔍 API Documentation

### **Base URL**

**Local:** `http://localhost:9000`  
**Production:** `https://usercrud-api-yourname.azurewebsites.net`

### **Endpoints**

#### **1. Get All Users**

```http
GET /api/users
```

**Response:**

```json
[
  {
    "Id": 1,
    "Name": "John Doe",
    "Email": "john@example.com",
    "Age": 25
  },
  {
    "Id": 2,
    "Name": "Jane Smith",
    "Email": "jane@example.com",
    "Age": 30
  }
]
```

**Status Codes:**

- `200 OK` - Success
- `500 Internal Server Error` - Database error

---

#### **2. Add New User**

```http
POST /api/users
Content-Type: application/json
```

**Request Body:**

```json
{
  "name": "Bob Johnson",
  "email": "bob@example.com",
  "age": 28
}
```

**Response:**

```
User added
```

**Status Codes:**

- `200 OK` - User created successfully
- `400 Bad Request` - Invalid input
- `500 Internal Server Error` - Database error

---

#### **3. Delete User**

```http
DELETE /api/users/:id
```

**Parameters:**

- `id` (path parameter) - User ID to delete

**Example:**

```http
DELETE /api/users/1
```

**Response:**

```
User deleted
```

**Status Codes:**

- `200 OK` - User deleted successfully
- `404 Not Found` - User not found
- `500 Internal Server Error` - Database error

---

## 🐛 Troubleshooting Guide

### **Common Issues and Solutions**

#### **1. Database Connection Failed (Local)**

**Error:**

```
❌ DB Connection Failed: ConnectionError: Failed to connect to localhost\\SQLEXPRESS
```

**Solutions:**

- ✅ Verify SQL Server is running (SQL Server Configuration Manager)
- ✅ Check server name: `localhost\\SQLEXPRESS` or `localhost`
- ✅ Enable TCP/IP protocol in SQL Server Configuration Manager
- ✅ Verify credentials in `.env` file
- ✅ Check if SQL Server Browser service is running

---

#### **2. Azure SQL Connection Failed**

**Error:**

```
Cannot open server 'usercrud-sql-server' requested by the login
```

**Solutions:**

- ✅ Check firewall rules in Azure SQL Server
- ✅ Add your IP address to allowed IPs
- ✅ Enable "Allow Azure services and resources to access this server"
- ✅ Verify connection string in App Service configuration
- ✅ Ensure `encrypt: true` in db.js for Azure SQL

---

#### **3. CORS Error in Frontend**

**Error:**

```
Access to XMLHttpRequest blocked by CORS policy
```

**Solutions:**

- ✅ Add CORS middleware in backend:

```javascript
const cors = require("cors");
app.use(cors());
```

- ✅ Or specify allowed origins:

```javascript
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://your-frontend.azurewebsites.net",
    ],
  }),
);
```

---

#### **4. App Service Not Starting**

**Error:**

```
Application Error
```

**Solutions:**

- ✅ Check `package.json` has correct start script:

```json
"scripts": {
  "start": "node server.js"
}
```

- ✅ View logs in Azure Portal: App Service → Log stream
- ✅ Check environment variables are set correctly
- ✅ Verify Node.js version matches runtime stack

---

#### **5. Environment Variables Not Working**

**Error:**

```
undefined is not a valid connection string
```

**Solutions:**

- ✅ Verify `.env` file exists and is in correct directory
- ✅ Ensure `require("dotenv").config()` is at top of server.js
- ✅ In Azure, check App Service → Configuration → Application settings
- ✅ Restart App Service after changing environment variables

---

#### **6. React App Shows Blank Page**

**Solutions:**

- ✅ Check browser console for errors
- ✅ Verify API_URL in `.env` is correct
- ✅ Ensure backend is running and accessible
- ✅ Check network tab for failed API calls
- ✅ Clear browser cache and rebuild: `npm run build`

---

#### **7. Stored Procedure Not Found**

**Error:**

```
Could not find stored procedure 'GetUsers'
```

**Solutions:**

- ✅ Verify stored procedures exist in database:

```sql
SELECT * FROM sys.procedures WHERE name = 'GetUsers';
```

- ✅ Recreate stored procedures if missing
- ✅ Check you're connected to correct database
- ✅ Ensure database name in connection string is correct

---

#### **8. Azure Deployment Fails**

**Error:**

```
Deployment failed with error
```

**Solutions:**

- ✅ Check Azure CLI is logged in: `az account show`
- ✅ Verify resource group and app name are correct
- ✅ Check deployment logs: `az webapp log tail`
- ✅ Ensure you're in correct directory (server/ for backend)
- ✅ Try manual deployment via Azure Portal

---

#### **9. Power BI Connection Issues**

**Error:**

```
Unable to connect to data source
```

**Solutions:**

- ✅ Verify Azure SQL firewall allows Power BI service IPs
- ✅ Check credentials are correct
- ✅ Use fully qualified server name: `server.database.windows.net`
- ✅ Enable "Allow Azure services" in SQL Server firewall
- ✅ Try DirectQuery instead of Import mode

---

#### **10. CI/CD Pipeline Fails**

**Error:**

```
Pipeline failed at deployment step
```

**Solutions:**

- ✅ Check service connection is valid
- ✅ Verify Azure subscription has necessary permissions
- ✅ Check YAML syntax is correct
- ✅ Review pipeline logs for specific error
- ✅ Ensure app name matches actual App Service name

---

## 📝 Best Practices

### **Security**

1. **Never commit sensitive data**
   - Add `.env` to `.gitignore`
   - Use Azure Key Vault for production secrets

2. **Use environment variables**
   - Different configs for dev/prod
   - Store in Azure App Service Configuration

3. **Implement authentication**
   - Add JWT tokens for API security
   - Use Azure AD for enterprise apps

4. **SQL Injection prevention**
   - Always use parameterized queries
   - Stored procedures provide additional security

### **Performance**

1. **Database optimization**
   - Add indexes on frequently queried columns
   - Use connection pooling (already implemented)

2. **Frontend optimization**
   - Use React.memo for expensive components
   - Implement pagination for large datasets
   - Lazy load routes with React.lazy()

3. **API optimization**
   - Implement caching (Redis)
   - Use compression middleware
   - Add rate limiting

### **Development Workflow**

1. **Version control**
   - Use Git branches (main, develop, feature/\*)
   - Write meaningful commit messages
   - Use pull requests for code review

2. **Testing**
   - Write unit tests for API endpoints
   - Add integration tests for database operations
   - Use Jest for React component testing

3. **Documentation**
   - Keep README updated
   - Document API changes
   - Add code comments for complex logic

---

## 🎓 Learning Resources

### **Technologies Used**

- **React:** https://react.dev/
- **Node.js:** https://nodejs.org/docs/
- **Express:** https://expressjs.com/
- **MSSQL:** https://learn.microsoft.com/en-us/sql/
- **Azure:** https://learn.microsoft.com/en-us/azure/

### **Tutorials**

- **Full Stack Development:** https://www.freecodecamp.org/
- **Azure Fundamentals:** https://learn.microsoft.com/en-us/training/azure/
- **Power BI:** https://learn.microsoft.com/en-us/power-bi/

---

## 🚀 Next Steps & Enhancements

### **Feature Additions**

1. **User Authentication**
   - Implement login/register
   - JWT token-based auth
   - Role-based access control

2. **Advanced CRUD**
   - Update user functionality
   - Search and filter users
   - Pagination

3. **File Upload**
   - User profile pictures
   - Azure Blob Storage integration

4. **Real-time Updates**
   - WebSocket integration
   - SignalR for live data

5. **Email Notifications**
   - SendGrid integration
   - Welcome emails for new users

### **Technical Improvements**

1. **Error Handling**
   - Global error middleware
   - Custom error classes
   - Better error messages

2. **Logging**
   - Winston or Morgan for logging
   - Azure Application Insights

3. **Testing**
   - Jest for unit tests
   - Supertest for API testing
   - React Testing Library

4. **Docker**
   - Containerize application
   - Docker Compose for local dev

5. **Monitoring**
   - Azure Application Insights
   - Performance monitoring
   - Error tracking

---

## 📞 Support & Contact

### **Getting Help**

- **Azure Support:** https://azure.microsoft.com/support/
- **Stack Overflow:** Tag questions with `azure`, `node.js`, `react`
- **GitHub Issues:** Create issues in your repository

### **Useful Commands Reference**

```bash
# Azure CLI
az login                                    # Login to Azure
az account list                             # List subscriptions
az webapp list                              # List web apps
az webapp log tail --name <app-name>        # View logs

# Node.js
npm install                                 # Install dependencies
npm start                                   # Start application
npm run build                               # Build for production

# Git
git status                                  # Check status
git add .                                   # Stage changes
git commit -m "message"                     # Commit changes
git push origin main                        # Push to remote
```

---

## 📄 License

This project is for educational purposes. Feel free to use and modify as needed.

---

## ✅ Project Checklist

### **Local Development**

- [ ] SQL Server installed and running
- [ ] Database and tables created
- [ ] Stored procedures created
- [ ] Backend running on localhost:
