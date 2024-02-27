import axios from "axios";

export const getAllProduct = (callback) => {
  axios.get("https://fakestoreapi.com/products")
  .then(res => {
    callback(res.data);
  })
  .catch(err => alert(err));
}

export const getDetailProduct = (id, callback) => {
  axios.get("https://fakestoreapi.com/products/" + id)
  .then(res => {
    callback(res.data);
  })
  .catch(err => alert(err));
}