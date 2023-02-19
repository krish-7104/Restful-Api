const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const queryObject = {};
  const { name, company, featured, sort, select } = req.query;
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  if (company) {
    queryObject.company = company;
  }
  if (featured) {
    queryObject.company = featured;
  }
  let apiData = Product.find(queryObject);
  if (sort) {
    let sortFix = sort.replaceAll(",", " ");
    apiData = apiData.sort(sortFix);
  }
  if (select) {
    let selectFix = select.replaceAll(",", " ");
    apiData = apiData.select(selectFix);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 5;
  let skip = (page - 1) * limit;
  apiData = apiData.skip(skip).limit(limit);

  const data = await apiData;
  res.status(200).json({ data, hits: data.length });
};
const getAllProductsTesting = async (req, res) => {
  const data = await Product.find(req.query);
  res.status(200).json(data);
};

module.exports = { getAllProducts, getAllProductsTesting };
