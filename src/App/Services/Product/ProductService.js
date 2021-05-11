import axios from "axios";
import { accessToken, domain } from "../../Configuration";

// export class ProductService {
//   fetchProducts = () => {
//     return axios({
//       url: `${domain}/products`,
//     });
//   };
// }

// export const productService = new ProductService();

export const fetchProducts = () => {
  return axios({
    url: `${domain}/products`,
    method: "GET",
  });
};
export const addProduct = (product) => {
  let formData = new formData();
  formData.append("file", product.file);
  formData.append("name", product.name);
  formData.append("price", product.price);
  formData.append("description", product.description);
  formData.append("evaluate", product.evaluate);
  formData.append("category", product.category);
  return axios({
    url: `${domain}/products`,
    method: "POST",
    data: formData,
    headers: {
      "Content-Type":
        "multipart/form-data; boundary=<calculated when request is sent>",
      Authorization: "Bearer " + localStorage.getItem(accessToken),
    },
  });
};
