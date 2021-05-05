import React from "react";
import HeaderContent from "../../Layouts/Seller/HeaderContent";
import RevenueStatistics from "../../Components/Seller/RevenueStatistics";
import ProductList from "../../Components/Seller/Product/ProductList";
import CustomerList from "../../Components/Seller/Customer/CustomerList";

const SellerPage = () => {
  return (
    <>
      <div className="main-content-seller">
        <HeaderContent />
        <main>
          <RevenueStatistics />
          <div className="recent-flex">
            <ProductList />
            <CustomerList />
          </div>
        </main>
      </div>
    </>
  );
};

export default SellerPage;
