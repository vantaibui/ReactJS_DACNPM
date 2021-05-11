import * as Types from "../../Types/ActionType";
import { CreateAction } from "../CreateAction";
import * as Services from "../../../Services";

export const actionFetchProductsRequest = () => {
  return (dispatch) => {
    // return axios({
    //   url: `${domain}/products`,
    //   method: "GET",
    // })
    //   .then((result) => {
    //     console.log(result.data);
    //     dispatch(CreateAction(Types.FETCH_PRODUCTS, result.data));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });]

    // return productService
    //   .fetchProducts()
    //   .then((result) => {
    //     dispatch(CreateAction(Types.FETCH_PRODUCTS, result.data));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    return Services.fetchProducts()
      .then((result) => {
        dispatch(CreateAction(Types.FETCH_PRODUCTS, result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
