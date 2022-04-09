const express =require("express");
const app = express();
app.use(express.json());

//Route Imports
const blog = require("./routes/blogRoute");
const user = require("./routes/userRoutes");

app.use("/api/v1",blog);
app.use("/api/v1",user);

module.exports = app;   