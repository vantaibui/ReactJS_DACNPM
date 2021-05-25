import React from "react";
import { domain } from "../../../Configuration";

const ProductSliderNav = (props) => {
  let { product } = props;
  let renderImage = (images) => {
    let result = {};
    for (let index = 0; index < images?.length; index++) {
      result = images[index].link.slice(30);
    }
    return result;
  };
  return (
    <div className="product-nav">
      <img
        src={`${domain}` + "/uploads/" + renderImage(product?.images)}
        alt="img"
        className="product-nav__img"
      />
    </div>
  );
};

export default ProductSliderNav;
