const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log("🚀 Server running on http://localhost:9000");
});
