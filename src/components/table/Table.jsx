import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./table.css";

export function Table() {
  const [users, setUsers] = useState([]);

  const navigate=useNavigate();

  const HandleClickView=(getId)=>{
    navigate(`userInfo/${getId}`)
  }

  const HandleDeleteUser=async(getId)=>{
    try {
        const response=await axios.delete(`http://localhost:9090/auth/deleteUser/${getId}`)
        console.log(response.data)
        loadUsers();
    } catch (error) {
        console.error(error.message || error)
    }
  }

  const HandleClickOnEdit=(getId)=>{
    navigate(`/editUser/${getId}`)
  }

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await axios.get("http://localhost:9090/auth/users");
      setUsers(response.data);
    } catch (error) {
      console.error(error.message || error);
    }
  };
  return (
    <section className="TableMainSec">
      <div className="TableWrapper">
        <table className="ActualTableDiv">
          <thead>
            <tr>
              <th>No.</th>
              <th>Username</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          {users && users.length !== 0
            ? users.map((each) => (
                <tbody key={each.id}>
                  <tr>
                    <td>{each.id}</td>
                    <td>{each.username}</td>
                    <td>{each.email}</td>
                    <td>
                      <button onClick={()=>HandleClickView(each.id)}>View</button>
                      <button onClick={()=>HandleClickOnEdit(each.id)}>Edit</button>
                      <button onClick={()=>HandleDeleteUser(each.id)}>Delete</button>
                    </td>
                  </tr>
                </tbody>
              ))
            : null}
        </table>
      </div>
    </section>
  );
}
