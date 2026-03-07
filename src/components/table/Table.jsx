import axios from "axios";
import { useEffect, useState } from "react";

import "./table.css"

export function Table() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await axios.get("http://localhost:9090/auth/users");
      setUsers(response.data)
    } catch (error) {
        console.error(error.message || error)
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
            </tr>
          </thead>
          {users && users.length!==0? users.map((each)=>
          <tbody key={each.id}>
            <tr>
              <td>{each.id}</td>
              <td>{each.username}</td>
              <td>{each.email}</td>
            </tr>
          </tbody>):null}
        </table>
      </div>
    </section>
  );
}
