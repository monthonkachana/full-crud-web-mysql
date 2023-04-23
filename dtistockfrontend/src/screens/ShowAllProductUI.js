import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";

const ShowAllProductUI = () => {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };


  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/products/${id}`);
    getProduct();
  };

  return (
    <>
      <div className="column mt-5 is-centered">
        <div className="column">
          <h1 className="title">Product</h1>
          <Link to="/productcreate">
            <button className="button is-success is-small">Create Product</button>
          </Link>
          <table className="table is-striped is-hoverable is-fullwidth">
            <thead>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Product Quantity</th>
              <th>Product Out Of Quantity</th>
              <th>Do Something else</th>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.productName}</td>
                  <td>{product.productPrice}</td>
                  <td>{product.productQuantity}</td>
                  <td>{product.productOutofOrder}</td>
                  <td>
                    <button className="button is-warning is-small">
                      <Link to="/productupdate">edit</Link>
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button  className="button is-danger is-small" onClick={() => deleteProduct(product.id)}>delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    </>
  );
};
export default ShowAllProductUI;
