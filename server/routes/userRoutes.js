const express = require("express");
const router = express.Router();
const { sql, poolPromise } = require("../db");

// Get all users
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

// Add user
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

// Delete user
router.delete("/:id", async (req, res) => {
  const pool = await poolPromise;

  await pool
    .request()
    .input("Id", sql.Int, req.params.id)
    .execute("DeleteUser");

  res.send("User deleted");
});

module.exports = router;
