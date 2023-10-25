const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "products.json");

function readProducts() {
  const productsData = fs.readFileSync(productsFilePath);
  return JSON.parse(productsData);
}

function saveProducts(products) {
  const productsData = JSON.stringify(products, null, 2);
  fs.writeFileSync(productsFilePath, productsData);
}

function getProductDetails(req, res) {
  const productId = parseInt(req.params.productId);
  const products = readProducts();
  const product = products.find((p) => p.id === productId);
  if (!product) {
    res.status(404).json({ error: "Product not found" });
  } else {
    res.json(product);
  }
}

function getAllProducts(req, res) {
  const products = readProducts();
  res.json(products);
}

function addProduct(req, res) {
  const { name, description, brand, category, features } = req.body;
  const products = readProducts();
  const productId = Math.floor(Math.random() * 10000);
  const newProduct = {
    id: productId,
    name,
    description,
    brand,
    category,
    features,
  };
  products.push(newProduct);
  saveProducts(products);
  res.status(201).json(newProduct);
}

function deleteProduct(req, res) {
  const productId = parseInt(req.params.productId);
  let products = readProducts();
  products = products.filter((product) => product.id !== productId);
  saveProducts(products);
  res.status(204).end();
}

module.exports = {
  getProductDetails,
  getAllProducts,
  addProduct,
  deleteProduct,
};
