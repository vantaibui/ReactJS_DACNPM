import React from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <div className="home-product">
      <div className="grid__row">
        {/* Product Item */}
        <ProductItem />
      </div>
    </div>
  );
};

export default ProductList;
