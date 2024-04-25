import React from "react";
import Product from "../P/product";
import Product1 from "../P/product1";
import Product2 from "../P/product2";
import Product3 from "../P/product3";
import Product4 from "../P/product4";
import Product5 from "../P/product5";

import "../productList/productList.css";

const ProductList = () => {
  return (
    <div className="p1">
      <div className="p1-texts">
        <h1 className="p1-title">Create & inspire. It's Lohani</h1>
        <p className="p1-desc">
          Lohani is crative portfolio that you work has been waiting for
          beautiful home, stunning portfolio system & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="p1-list">
        <Product />
        <Product1 />
        <Product2 />
        <Product3 />
        <Product4 />
        <Product5 />
      </div>
    </div>
  );
};
export default ProductList;
