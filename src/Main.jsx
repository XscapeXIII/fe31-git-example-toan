import { useState } from "react";
// import React from "react";
function Main({ isShowSidebar }) {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
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
    console.log(`buy ${name}`);
  };

  const handleChangeSearchkey = (e) => {
    setValue(e.target.value);
  };

  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    setCount(count - 1);
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

  return (
    <div className={isShowSidebar ? "main" : "main full"}>
      <button onClick={() => handlePlus()}>+</button>
      <h3>{count}</h3>
      <button onClick={() => handleMinus()}>-</button>
      <div>
        <input type="searchkey" onChange={(e) => handleChangeSearchkey(e)} />
        <p>{value}</p>
      </div>
      <div>{renderProductList()}</div>
      <button onClick={() => handleAddProduct()}>Add Product</button>
    </div>
  );
}
export default Main;
