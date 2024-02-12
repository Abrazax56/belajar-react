import axios from "axios";

export default (callback) => {
  axios.get("https://fakestoreapi.com/products")
  .then(res => {
    callback(res.data);
  })
  .catch(err => alert(err));
}