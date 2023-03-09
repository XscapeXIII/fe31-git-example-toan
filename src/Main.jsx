import { useState } from "react";
// import React from "react";
function Main() {
  const [value, setValue] = useState("");
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const [productList, setProductList] = useState([
    {
      name: "iPhone 14",
      price: 999,
    },
    {
      name: "iPhone 14 Pro",
      price: 1999,
    },
    {
      name: "iPhone 15",
      price: 2999,
    },
  ]);

  const handleBuyProduct = (e, name) => {
    console.log(e.target);
  };

  const handleAddProduct = () => {
    setProductList([
      ...productList,
      {
        name: "samsung",
        price: 1212,
      },
    ]);
  };

  const renderProductList = () => {
    return productList.map((item, index) => {
      return (
        <div key={index} className="product-item">
          <h2>${item.name}</h2>
          <h3>${item.price}</h3>
          <button onClick={(e) => handleBuyProduct(e, item.name)}>Buy</button>
        </div>
      );
    });
  };
  console.log(productList);

  return (
    <div className="main">
      <div>
        <input type="text" onChange={(e) => handleInput(e)} />
        <p>{value}</p>
      </div>
      <div>{renderProductList()}</div>
      <button onClick={() => handleAddProduct()}>Add Product</button>
    </div>
  );
}
export default Main;
