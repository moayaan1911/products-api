const express = require("express"); // Import express
const {
  getAllProducts,
  getAllProductsTesting,
} = require("../controllers/productsController");

const router = express.Router(); // Make a router

router.get("/", getAllProducts);

router.get("/testing", getAllProductsTesting);

module.exports = router; // Export router
