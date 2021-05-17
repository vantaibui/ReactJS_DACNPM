import React from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  let { products } = props;

  let renderProductItem = (products) => {
    let result;
    result = products.map((product, index) => {
      return <ProductItem key={index} product={product} />;
    });
    return result;
  };

  return (
    <div className="home-product">
      <div className="grid__row">{renderProductItem(products)}</div>
    </div>
  );
};

export default ProductList;
