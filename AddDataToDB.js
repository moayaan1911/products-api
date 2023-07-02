const connectToDb = require("./db/connect"); // importing connectToDb

const Product = require("./models/productsModel"); // importing Product model

const jsonProducts = require("./products.json"); // importing products.json

const start = async () => {
  await connectToDb(); // connecting to database
  console.log("Connected to database"); // printing success message
  // await Product.deleteMany(); // deleting all products
  console.log("Creating products...");
  await Product.create(jsonProducts); // adding all products
  console.log("Success"); // printing success message
  process.exit(0); // exiting the process
};

start(); // calling start function
