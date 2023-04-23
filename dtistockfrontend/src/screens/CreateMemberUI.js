import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";
const CreateMemberUI = () => {
  // create product and reset the form after submit
  const [members, setMembers] = useState([]);
  const [memberName, setMemberName] = useState("");
  const [memberUsername, setMemberUsername] = useState("");
  const [memberPassword, setMemberPassword] = useState("");
  const [memberPhone, setMemberPhone] = useState("");

  useEffect(() => {}, []);

  const checkMemberValue = () => {
    if (memberName === "") {
      alert("Member Name is required");
      return false;
    }
    if (memberUsername === "") {
      alert("Member Username is required");
      return false;
    }
    if (memberPassword === "") {
      alert("Member Password is required");
      return false;
    }
    if (memberPhone === "") {
      alert("Member Phone is required");
      return false;
    }
    return true;
  };

  const createMember = async () => {
    if (!checkMemberValue()) {
      return;
    } else {
      const response = await axios.post("http://localhost:5000/members", {
        memberName,
        memberUsername,
        memberPassword,
        memberPhone,
      });
      setMembers(response.data);
      setMemberName("");
      setMemberUsername("");
      setMemberPassword("");
      setMemberPhone("");
      alert("Member Created");
      window.location.href = "/members";
    }
  };
  return (
    <div className="column mt-5 is-centered">
      <div className="column">
        <h1 className="title">Create Member</h1>
        <form>
          <div className="field">
            <label className="label">Member Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Member Name"
                value={memberName}
                onChange={(e) => setMemberName(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Member Username</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Member Username"
                value={memberUsername}
                onChange={(e) => setMemberUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Member Password</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Member Password"
                value={memberPassword}
                onChange={(e) => setMemberPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Member Phone</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Member Phone"
                value={memberPhone}
                onChange={(e) => setMemberPhone(e.target.value)}
              />
            </div>
          </div>
        </form>
        <br />
        <button className="button is-success is-small" onClick={createMember}>
          Create Member
        </button>
        &nbsp;&nbsp;&nbsp;
        <Link to="/members">
          <button className="button is-danger is-small">Cancel</button>
        </Link>
      </div>
    </div>
  );
};

export default CreateMemberUI;
