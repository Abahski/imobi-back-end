const express = require("express");
const { Sequelize } = require("sequelize");
const models = require("./models");
const karyawanRoutes = require("./routes/karyawan");
const jabatanRoutes = require("./routes/jabatan");
const departmentRoutes = require("./routes/department");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Sync database
models.sequelize.sync();

// Routes
app.use("/karyawan", karyawanRoutes);
app.use("/jabatan", jabatanRoutes);
app.use("/department", departmentRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
