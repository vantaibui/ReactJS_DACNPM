import React from "react";

const ProductSliderNav = (props) => {
  let { product } = props;
  let renderImage = (images) => {
    return images?.map((image, index) => {
      return image.link;
    });
  };
  return (
    <div className="product-nav">
      <img
        src="https://cdn.tgdd.vn/Products/Images/8784/231575/bhx/cai-ngot-4kfarm-tui-300g-202011271707356654.jpg"
        // src="ac"
        alt="img"
        className="product-nav__img"
      />
    </div>
  );
};

export default ProductSliderNav;
