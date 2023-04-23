import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";
const CreateProductUI = () => {
  // create product and reset the form after submit
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productOutofOrder, setProductOutofOrder] = useState("");

  useEffect(() => {}, []);

  const checkProductValue = () => {
    if (productName === "") {
      alert("Product Name is required");
      return false;
    }
    if (productPrice === "") {
      alert("Product Price is required");
      return false;
    }
    if (productQuantity === "") {
      alert("Product Quantity is required");
      return false;
    }
    if (productOutofOrder === "") {
      alert("Product Out of Order is required");
      return false;
    }
    return true;
  };

  const createProduct = async () => {
    if (!checkProductValue()) {
      return;
    } else {
      const response = await axios.post("http://localhost:5000/products", {
        productName,
        productPrice,
        productQuantity,
        productOutofOrder,
      });
      setProducts(response.data);
      setProductName("");
      setProductPrice("");
      setProductQuantity("");
      setProductOutofOrder("");
      alert("Product Created");
      window.location.href = "/products";
    }
  };
  return (
    <div className="column mt-5 is-centered">
      <div className="column">
        <h1 className="title">Create Product</h1>
        <form>
          <div className="field">
            <label className="label">Product Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Product Price</label>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="SProduct Price"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Product Quantity</label>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="Product Quantity"
                value={productQuantity}
                onChange={(e) => setProductQuantity(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Product Out Of Order</label>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="Product Out Of Order"
                value={productOutofOrder}
                onChange={(e) => setProductOutofOrder(e.target.value)}
              />
            </div>
          </div>
        </form>
        <br />
        <button className="button is-success is-small" onClick={createProduct}>
          Create Product
        </button>
        &nbsp;&nbsp;&nbsp;
        <Link to="/products">
          <button className="button is-danger is-small">Cancel</button>
        </Link>
      </div>
    </div>
  );
};

export default CreateProductUI;
