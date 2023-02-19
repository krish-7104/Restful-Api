const Router = require("express");
const router = Router();
const {
  getAllProducts,
  getAllProductsTesting,
} = require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);

module.exports = router;
