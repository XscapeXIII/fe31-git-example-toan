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

  const [productData, setProductData] = useState({
    name: "",
    price: "",
  });

  const [productError, setProductError] = useState({
    name: "",
    price: "",
  });

  const handleChangeProductData = (e, key) => {
    setProductData({
      ...productData,
      [key]: e.target.value,
    });
  };

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
    //TRONG REACT KO THỂ SÉT 2 STATE GIỐNG NHAU TRỞ LÊN TRONG CÙNG 1 FUNCTION
    //NÊN CHÚNG TA TẠO RA 1 OBJ TRUNG GIAN LÀ errors
    let isValid = true;
    const onlyNumberRegEx = /^[0-9]/g;
    const errors = {
      name: "",
      price: "",
    };

    if (!productData.name) {
      errors.name = "Name is require";
      isValid = false;
    } else {
      errors.name = "";
    }

    if (!productData.price) {
      errors.price = "Price is require";
      isValid = false;
    } else if (!onlyNumberRegEx.test(productData.price)) {
      errors.price = "Price must be number";
      isValid = false;
    } else {
      errors.price = "";
    }

    if (isValid) {
      setProductList([
        ...productList,
        {
          name: productData.name,
          price: parseInt(productData.price),
        },
      ]);
      setProductData({
        name: "",
        price: "",
      });
    }
    setProductError(errors);
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
      <input
        type="text"
        placeholder="Product name"
        onChange={(e) => handleChangeProductData(e, "name")}
        value={productData.name}
      />
      <span>{productError.name}</span>
      <input
        type="text"
        placeholder="Product price"
        onChange={(e) => handleChangeProductData(e, "price")}
        value={productData.price}
      />
      <span>{productError.price}</span>
      <button onClick={() => handleAddProduct()}>Add Product</button>
    </div>
  );
}
export default Main;
