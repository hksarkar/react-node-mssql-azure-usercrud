const sql = require("mssql");

/*const config = {
  user: "testuser",
  password: "Test@123456789",
  server: "localhost\\SQLEXPRESS",
  database: "PracticeDB",
  options: {
    trustServerCertificate: true,
  },
};*/

//Testing Deployments
const config = {
  user: "azureuser",
  password: "Strong@12345",
  server: "usercrud-sql-hksarkar.database.windows.net",
  database: "PracticeDB",
  options: {
    encrypt: true, // IMPORTANT for Azure
  },
};

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
