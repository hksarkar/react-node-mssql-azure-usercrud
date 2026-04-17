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
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
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
