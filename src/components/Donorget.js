import axios from "axios";
import "../style.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Donorget() {
    const [data,setData]=useState([]);
    
    useEffect(() => {
        loadDetails();
      }, []);

   
  const loadDetails =async()=>
  {
     const result =await  axios
     .get("http://localhost:8083/api/donor");
     setData(result.data);
  }
  return(
  <div className="donardetails">
  <center>
    <div className="con">
      <table className="table table-bordered s">
        <thead>
          <tr>
            
          <th>Donor Project Code</th>
          <th>Donor Registration Number</th>

            <th>Donor name</th>
            <th>Donor email</th> 
            <th>Donor Donation</th>
            <th>Full Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((details) => (
            <tr >
              

              <td scope="row">{details.donor_project_code}</td>
              <td>{details.id}</td>
              <td>{details.donor_name}</td>
              <td>{details.donor_email}</td>
              <td>{details.donation}</td>
              <td><Link to={`/Getdonor/${details.id}` }>To See Full Details</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
</div>
    
  </center>
</div>
 
  );
};

export default Donorget;
