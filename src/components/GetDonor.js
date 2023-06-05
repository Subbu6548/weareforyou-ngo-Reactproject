import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import "../style.css"
function GetDonor() {
 
  
  const { id }=useParams();
  useEffect(() => {
    loadDetails();
  }, []);

const [data,setData]=useState([]

);



const loadDetails =async()=>
  {
     return  axios
     .get(`http://localhost:8083/api/donor/${id}`)
     .then(
      (response)=>setData(response.data)
     ).catch(
      (ex)=>console.log(ex)
     );
    
   
  }
  useEffect(() => {
    loadDetails();
  }, []);
 
 
  


  return (
<div className="donardetails">
      <center>
        <div className="con">
          <table className="table table-bordered ">
            <thead>
              <tr>
                 <th>Donor name</th>
                 <th>Donor email</th>
                 <th>Donor Donation</th>
                 <th>Donor Project Code</th>
                 <th>Project Name</th>
                 <th>project description</th>
                 <th>Project Place</th>

              </tr>
                  
            </thead>
            <tbody>
            <tr>
      <td>{JSON.stringify(data.donorname)}</td>
      <td>{JSON.stringify(data.donoremail)}</td>
      <td>{JSON.stringify(data.donordonation)}</td>
      <td>{JSON.stringify(data.projectCode)}</td>
      <td>{JSON.stringify(data.project_name)}</td>
      <td>{JSON.stringify(data.project_description)}</td>
      <td>{JSON.stringify(data.projectplace)}</td>
  </tr>
            </tbody>
           
          </table>
        </div>
      </center>
    </div>
  );
}
export default GetDonor;
