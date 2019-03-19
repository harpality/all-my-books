const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

// middleware for parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// enable static assets from build for deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// routes to be used in routes folder
app.use(routes);

// connect to MongoDB via mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

// start server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
