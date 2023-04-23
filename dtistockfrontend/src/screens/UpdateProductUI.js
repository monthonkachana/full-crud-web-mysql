import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";

const UpdateProductUI = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  const editProduct = async (id) => {
    const response = await axios.get(`http://localhost:5000/products/${id}`);
    setProduct(response.data);
  };

  const updateProduct = async (id) => {
    await axios.put(`http://localhost:5000/products/${id}`, product);
    getProduct();
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/products/${id}`);
    getProduct();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <div>
      <div className="column mt-5 is-centered">
        <div className="column">
          <h1 className="title">Update Product</h1>
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
                    <button
                      className="button is-warning is-small"
                      onClick={() => editProduct(product.id)}
                    >
                      <Link to="/productupdate">edit</Link>
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button
                      className="button is-danger is-small"
                      onClick={() => deleteProduct(product.id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="column mt-5 is-centered">
            <div className="column">
              <h1 className="title">Update Product</h1>
              <form>
                <div className="field">
                  <label className="label">Product Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Product Name"
                      name="productName"
                      value={product.productName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Product Price</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Product Price"
                      name="productPrice"
                      value={product.productPrice}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Product Quantity</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Product Quantity"
                      name="productQuantity"
                      value={product.productQuantity}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Product Out Of Order</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Product Out Of Order"
                      name="productOutofOrder"
                      value={product.productOutofOrder}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="field is-grouped">
                  <div className="control">
                    <button
                      className="button is-link"
                      onClick={() => updateProduct(product.id)}
                    >
                      Update
                    </button>
                  </div>
                  <div className="control">
                    <Link to="/products">
                      <button className="button is-link is-light">
                        Cancel
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProductUI;
