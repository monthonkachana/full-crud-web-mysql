import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";

const UpdateMemberUI = () => {
  const [members, setMembers] = useState([]);
  const [member, setMember] = useState([]);

  useEffect(() => {
    getMember();
  }, []);

  const getMember = async () => {
    const response = await axios.get("http://localhost:5000/members");
    setMembers(response.data);
  };

  const editMember = async (id) => {
    const response = await axios.get(`http://localhost:5000/members/${id}`);
    setMember(response.data);
  };

  const updateMember = async (id) => {
    await axios.put(`http://localhost:5000/members/${id}`, member);
    getMember();
  };

  const deleteMember = async (id) => {
    await axios.delete(`http://localhost:5000/members/${id}`);
    getMember();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMember({ ...member, [name]: value });
  };

  return (
    <div>
      <div className="column mt-5 is-centered">
        <div className="column">
          <h1 className="title">Update Member</h1>
          <table className="table is-striped is-hoverable is-fullwidth">
            <thead>
              <th>Member ID</th>
              <th>Member Name</th>
              <th>Member Username</th>
              <th>Member Password</th>
              <th>Member Phone</th>
              <th>Do Something else</th>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id}>
                  <td>{member.id}</td>
                  <td>{member.memberName}</td>
                  <td>{member.memberUsername}</td>
                  <td>{member.memberPassword}</td>
                  <td>{member.memberPhone}</td>
                  <td>
                    <button
                      className="button is-warning is-small"
                      onClick={() => editMember(member.id)}
                    >
                      <Link to="/memberupdate">edit</Link>
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button
                      className="button is-danger is-small"
                      onClick={() => deleteMember(member.id)}
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
              <h1 className="title">Update Member</h1>
              <form>
                <div className="field">
                  <label className="label">Member Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Member Name"
                      name="memberName"
                      value={member.memberName}
                      onChange={handleInputChange}
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
                      name="memberUsername"
                      value={member.memberUsername}
                      onChange={handleInputChange}
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
                      name="memberPassword"
                      value={member.memberPassword}
                      onChange={handleInputChange}
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
                      name="memberPhone"
                      value={member.memberPhone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="field is-grouped">
                  <div className="control">
                    <button
                      className="button is-link"
                      onClick={() => updateMember(member.id)}
                    >
                      Update
                    </button>
                  </div>
                  <div className="control">
                    <Link to="/members">
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

export default UpdateMemberUI;
