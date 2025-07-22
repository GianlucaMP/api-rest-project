// model
import { db } from "../config/db.js";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  Timestamp
} from "firebase/firestore";

const productCollection = collection(db, "productos");

export const getAllProducts = async () => {
  try {
    const productList = await getDocs(productCollection);
    const products = [];
    productList.forEach((doc) => products.push({ id: doc.id, ...doc.data() }));

    return products;
  } catch (error) {
    throw new Error("Error", error.message);
  }
};

export const getProductById = async (id) => {
  try {
    const productDoc = doc(productCollection, id);
    const product = await getDoc(productDoc);
    if (product.exists()) {
      return { id: product.id, ...product.data() };
    }
    else {
      throw new Error("Producto no encontrado");
    }
    
  } catch (error) {
    throw new Error("Error", error.message);
  }
};

export const saveProduct = async (product) => {
  try {
    const newProduct = await addDoc(productCollection, {...product, fecha_creacion: Timestamp.now() });
    return newProduct
  } catch (error) {
    throw new Error("Error", error.message);
  }
};

export const removeProduct = async (id) => {
  try {
    const productDoc = doc(productCollection, id);
    await deleteDoc(productDoc);
  } catch (error) {
    throw new Error("Error", error.message);
  }
}
