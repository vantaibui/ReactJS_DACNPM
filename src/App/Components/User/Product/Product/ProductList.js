import React from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  let { products } = props;

  let renderProductItem = (products) => {
    return products.map((product, index) => {
      return <ProductItem key={index} product={product} />;
    });
  };

  return (
    <div className="home-product">
      <div className="grid__row">
        {/* Product Item */}
        {renderProductItem(products)}
      </div>
    </div>
  );
};

export default ProductList;
