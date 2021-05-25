import React from "react";
import { domain } from "../../../Configuration";

const ProductSlideFor = (props) => {
  let { product } = props;
  let renderImage = (images) => {
    let result = {};
    for (let index = 0; index < images?.length; index++) {
      result = images[index].link.slice(30);
    }
    return result;
  };
  return (
    <div className="product">
      <img
        src={`${domain}` + "/uploads/" + renderImage(product?.images)}
        alt="img"
        className="product__img"
      />
    </div>
  );
};

export default ProductSlideFor;
