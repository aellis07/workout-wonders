const express = require("express");
const mongoose = require("mongoose");
// const routes = require("./routes");

const htmlRoutes = require("./routes/htmlRoutes.js");
// const apiRoutes = require("./routes/apiRoutes.js");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// routes
// app.use(routes);

app.use(htmlRoutes);
// app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}: http://localhost:3001`);
});
