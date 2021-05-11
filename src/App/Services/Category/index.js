import axios from "axios";
import { domain } from "../../Configuration";

export class CategoryService {
  fetchCategories = () => {
    return axios({
      url: `${domain}/categories`,
    });
  };
}

export const categoryService = new CategoryService();
