import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";

const UpdateSupplierUI = () => {
  // edit supplier and show all supplier in one page
  const [suppliers, setSuppliers] = useState([]);
  const [supplier, setSupplier] = useState({});

  useEffect(() => {
    getSupplier();
  }, []);

  const getSupplier = async () => {
    const response = await axios.get("http://localhost:5000/suppliers");
    setSuppliers(response.data);
  };

  const editSupplier = async (id) => {
    const response = await axios.get(`http://localhost:5000/suppliers/${id}`);
    setSupplier(response.data);
  };

  const updateSupplier = async (id) => {
    await axios.put(`http://localhost:5000/suppliers/${id}`, supplier);
    getSupplier();
  };

  const deleteSupplier = async (id) => {
    await axios.delete(`http://localhost:5000/suppliers/${id}`);
    getSupplier();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSupplier({ ...supplier, [name]: value });
  };

  return (
    <>
      <div className="column mt-5 is-centered">
        <div className="column">
          <h1 className="title">Update Supplier</h1>
          <table className="table is-striped is-hoverable is-fullwidth">
            <thead>
              <th>Supplier ID</th>
              <th>Supplier Name</th>
              <th>Supplier Contact</th>
              <th>Supplier Address</th>
              <th>Supplier Phone</th>
              <th>Do Something else</th>
            </thead>
            <tbody>
              {suppliers.map((supplier) => (
                <tr key={supplier.id}>
                  <td>{supplier.id}</td>
                  <td>{supplier.supplierName}</td>
                  <td>{supplier.supplierContact}</td>
                  <td>{supplier.supplierAddress}</td>
                  <td>{supplier.supplierPhone}</td>
                  <td>
                    <button
                      className="button is-warning is-small"
                      onClick={() => editSupplier(supplier.id)}
                    >
                      <Link to="/supplierupdate">edit</Link>
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button
                      className="button is-danger is-small"
                      onClick={() => deleteSupplier(supplier.id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="column mt-5 is-centered">
        <div className="column">
          <h1 className="title">Update Supplier</h1>
          <form>
            <div className="field">
              <label className="label">Supplier Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="supplierName"
                  value={supplier.supplierName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Supplier Contact</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="supplierContact"
                  value={supplier.supplierContact}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Supplier Address</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="supplierAddress"
                  value={supplier.supplierAddress}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Supplier Phone</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="supplierPhone"
                  value={supplier.supplierPhone}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button
                  className="button is-link"
                  onClick={() => updateSupplier(supplier.id)}
                >
                  Update
                </button>
              </div>
              <div className="control">
                <Link to="/">
                  <button className="button is-link is-light">Cancel</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateSupplierUI;
