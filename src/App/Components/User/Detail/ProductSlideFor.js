import React from "react";

const ProductSlideFor = (props) => {
  let { product } = props;
  let renderImage = (images) => {
    return images.map((image, index) => {
      console.log(image);
      return image;
    });
  };
  return (
    <div className="product">
      <img
        src="https://salt.tikicdn.com/cache/w64/ts/product/e5/06/a5/43d941f6dbb57d573bd4e1c840b2b3bd.jpg"
        alt="img"
        className="product__img"
      />
    </div>
  );
};

export default ProductSlideFor;
