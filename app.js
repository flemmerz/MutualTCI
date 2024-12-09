const express = require("express");
const bodyParser = require("body-parser");
const dataRoutes = require("./routes/data");

const app = express();
app.use(bodyParser.json());

// Routes
app.use("/api/data", dataRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
