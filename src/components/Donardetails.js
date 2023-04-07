import axios from "axios";
import "../style.css";
import React, { useEffect, useState } from "react";

function Donardetails() {
  const [data, Setdata] = useState([]);
  var amo = 0;

  useEffect(() => {
    axios
      .get("http://localhost:8080/getdetails")
      .then((res) => Setdata(res.data))
      .catch((ex) => console.log(ex));
  }, []);

  return (
    <div className="donardetails">
      <center>
        <div className="con">
          <table className="table table-bordered s">
            <thead>
              <tr>
                <th>id</th>

                <th>name</th>

                <th>email</th>

                <th>phonenumber</th>

                <th>amount</th>
              </tr>
            </thead>
            <tbody>
              {data.map((details) => (
                <tr key={details.Id}>
                  <td scope="row">{details.id}</td>

                  <td>{details.name}</td>

                  <td>{details.email}</td>

                  <td>{details.phnumber}</td>

                  <td>{details.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </center>
    </div>
  );
}

export default Donardetails;
