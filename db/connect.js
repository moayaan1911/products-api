const mongoose = require("mongoose"); // importing mongoose

require("dotenv").config(); // importing dotenv

const connectToDb = async () => {
  console.log("Connecting to database...");
  return await mongoose.connect(process.env.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectToDb; // exporting connectToDb
