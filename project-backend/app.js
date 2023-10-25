const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

const cors = require("cors");
app.use(cors());
app.use(express.json());

const apiRoutes = require("./src/routes/apiRoutes");

app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
