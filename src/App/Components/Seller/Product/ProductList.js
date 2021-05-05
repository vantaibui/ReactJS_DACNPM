import React from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <div className="projects">
      <div className="card">
        <div className="card-header">
          <h3>Recent projects</h3>
          <button>
            See all <i className="fa fa-arrow-right" />
          </button>
        </div>
        <div className="card-body">
          <table>
            <thead>
              <tr>
                <th>Project Tittle</th>
                <th>Department</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <ProductItem />
              <ProductItem />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
