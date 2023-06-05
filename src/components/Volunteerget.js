import axios from "axios";
import "../style.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Volunteerget() {

    useEffect(() => {
        loadDetails();
      }, []);

    const [data,setData]=useState([]);
    
  const loadDetails =async()=>
  {
     const result =await  axios
     .get("http://localhost:8080/api/volunteer");
     console.log(result);
     setData(result.data);
     
  }
  return(
  <div className="donardetails">
  <center>
    <div className="con">
      <table className="table table-bordered s">
        <thead>
          <tr>
            

            <th>Volunteer Project Code</th>

            <th>Volunteer name</th>

            <th>Volunteer Email</th>
            <th>Volunteer phone number</th>
            <th>Volunteer address</th>
            <th>Volunteer details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((details) => (
            <tr >
              

              <td scope="row">{details.volunteer_project_code}</td>

              <td>{details.volunteer_name}</td>
              <td>{details.volunteer_email}</td>
              
              <td>{details.volunteer_phno}</td>
              <td>{details.volunteer_address}</td>
              <td><Link to={`/GetVolunteer/${details.id}` }>To See Full Details</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
</div>
    
  </center>
</div>
 
  );
};

export default Volunteerget;