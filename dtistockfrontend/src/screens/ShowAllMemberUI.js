import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";

const ShowAllMemberUI = () => {
  
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getMember();
  }, []);

  const getMember = async () => {
    const response = await axios.get("http://localhost:5000/members");
    setMembers(response.data);
  };


  const deleteMember = async (id) => {
    await axios.delete(`http://localhost:5000/members/${id}`);
    getMember();
  };

  return (
    <>
      <div className="column mt-5 is-centered">
        <div className="column">
          <h1 className="title">Member</h1>
          <Link to="/membercreate">
            <button className="button is-success is-small">Create Member</button>
          </Link>
          <table className="table is-striped is-hoverable is-fullwidth">
            <thead>
              <th>Member ID</th>
              <th>Member Name</th>
              <th>Member Username</th>
              <th>Member Phone</th>
              <th>Do Something else</th>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id}>
                  <td>{member.id}</td>
                  <td>{member.memberName}</td>
                  <td>{member.memberUsername}</td>
                  <td>{member.memberPhone}</td>
                  <td>
                    <button className="button is-warning is-small">
                      <Link to="/memberupdate">edit</Link>
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button  className="button is-danger is-small" onClick={() => deleteMember(member.id)}>delete</button>
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
export default ShowAllMemberUI;
