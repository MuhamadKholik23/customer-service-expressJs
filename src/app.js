const express = require("express");
const bodyParser = require("body-parser");
const customerRoutes = require("./routes/customerRoute");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/customers", customerRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
