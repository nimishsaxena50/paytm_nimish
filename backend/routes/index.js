const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://saxenanimish473:real123@cluster0.wez6c.mongodb.net/", {
  dbName: "paytm",
})
.then(() => console.log("Connected to MongoDB ✅"))
.catch((err) => console.error("Failed to connect to MongoDB ❌", err));

app.use("/api", authRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));