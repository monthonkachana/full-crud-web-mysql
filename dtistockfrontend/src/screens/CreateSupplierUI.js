import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "bulma/css/bulma.css";

const CreateSupplierUI = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [supplierName, setSupplierName] = useState("");
  const [supplierContact, setSupplierContact] = useState("");
  const [supplierAddress, setSupplierAddress] = useState("");
  const [supplierPhone, setSupplierPhone] = useState("");

  useEffect(() => {}, []);

  const checkSupplierValue = () => {
    if (supplierName === "") {
      alert("Supplier Name is required");
      return false;
    }
    if (supplierContact === "") {
      alert("Supplier Contact is required");
      return false;
    }
    if (supplierAddress === "") {
      alert("Supplier Address is required");
      return false;
    }
    if (supplierPhone === "") {
      alert("Supplier Phone is required");
      return false;
    }
    return true;
  };

  const createSupplier = async () => {
    if (!checkSupplierValue()) {
      return;
    } else {
      const response = await axios.post("http://localhost:5000/suppliers", {
        supplierName,
        supplierContact,
        supplierAddress,
        supplierPhone,
      });
      setSuppliers(response.data);
      // reset values
      setSupplierName("");
      setSupplierContact("");
      setSupplierAddress("");
      setSupplierPhone("");
      alert("Supplier Created");
      // redirect to home page
      window.location.href = "/";
    }
  };

  return (
    <div className="column mt-5 is-centered">
      <div className="column">
        <h1 className="title">Create Supplier</h1>
        <form>
          <div className="field">
            <label className="label">Supplier Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Supplier Name"
                value={supplierName}
                onChange={(e) => setSupplierName(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Supplier Contact</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Supplier Contact"
                value={supplierContact}
                onChange={(e) => setSupplierContact(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Supplier Address</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Supplier Address"
                value={supplierAddress}
                onChange={(e) => setSupplierAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Supplier Phone</label>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="Supplier Phone"
                value={supplierPhone}
                onChange={(e) => setSupplierPhone(e.target.value)}
              />
            </div>
          </div>
        </form>
        <br />
        <button className="button is-success is-small" onClick={createSupplier}>
          Create Supplier
        </button>
        &nbsp;&nbsp;&nbsp;
        <Link to="/">
          <button className="button is-danger is-small">Cancel</button>
        </Link>
      </div>
    </div>
  );
};

export default CreateSupplierUI;
