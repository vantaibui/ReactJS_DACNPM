import React from "react";
import CustomerItem from "./CustomerItem";

const CustomerList = () => {
  return (
    <div className="products">
      <h3>
        Products
        <small>
          see all products <span className="fa fa-arrow-right" />
        </small>
      </h3>
      <div className="table-responsive">
        <table className="products__table">
          <tbody>
            <tr className="table">
              <td>
                <div>
                  <span className="indicator even" />
                </div>
              </td>
              <td>
                <div>Customer experience designer</div>
              </td>
              <td>
                <div>Design</div>
              </td>
              <td>
                <div>Copenhagen Dk.</div>
              </td>
              <td>
                <div>Posted 6 days ago.</div>
              </td>
              <td>
                <div>
                  <button>8 applicants</button>
                </div>
              </td>
            </tr>
            <CustomerItem />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerList;
