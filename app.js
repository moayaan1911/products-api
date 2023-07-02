const express = require("express"); // import express
const connectToDb = require("./db/connect");

const app = express(); // initialize express

app.get("/", (req, res) => {
  // create a route
  res.send("Hello World"); // send a response
});

app.use("/api/products", require("./routes/productsRoute")); // use productsRoute

const start = async () => {
  // connect to database
  try {
    await connectToDb();
    app.listen(6969, () => console.log("Server running on port 6969")); // listen on port 3000
  } catch (error) {
    console.log(error);
  }
};
start(); // call start function
