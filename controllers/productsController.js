const Product = require("../models/productsModel");

const getAllProducts = async (req, res) => {
  const { company, name, price, rating, featured, sort, select } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = { $regex: company, $options: "i" };
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  if (price) {
    queryObject.price = price;
  }
  if (rating) {
    queryObject.rating = rating;
  }
  if (featured) {
    queryObject.featured = featured;
  }

  let data = Product.find(queryObject);

  if (sort) {
    let sortList = sort.replace(",", " ");
    data = data.sort(sortList);
  }

  if (select) {
    // let selectList = select.replace(",", " ");
    let selectList = select.split(",").join(" ");
    data = data.select(selectList);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 3;
  let skip = (page - 1) * limit;

  data = data.skip(skip).limit(limit);
  const result = await data;
  res.status(200).json({ result });
};

const getAllProductsTesting = async (req, res) => {
  const appleProducts = await Product.find(req.query).sort("price");
  res.status(200).json({ appleProducts });
};

module.exports = {
  getAllProducts,
  getAllProductsTesting,
};
