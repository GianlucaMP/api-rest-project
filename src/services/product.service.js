// services
import { getAllProducts, getProductById, saveProduct, removeProduct } from "../models/product.model.js";

const getAll = async () => {
  return await getAllProducts();
};

const getById = async (id) => {
  return await getProductById(id);
};

const createProduct = async (product) => {
  return await saveProduct(product);
};

const deleteProduct = async (id) => {
  return await removeProduct(id);
};

export default { getAll, getById, createProduct, deleteProduct };
