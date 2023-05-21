import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


function GetDonor() {
 
  
  const { id }=useParams();
  useEffect(() => {
    loadDetails();
  }, []);

const [data,setData]=useState([]

);
const loadDetails =async()=>
  {
     const result =await  axios
     .get(`http://localhost:8083/api/donor/${id}`)
     .then(
      (res)=>console.log(res.data)
     ).catch(
      (ex)=>console.log(ex)
     );
     setData(result.data);
   
  }
  useEffect(() => {
    loadDetails();
  }, []);
 
  


  return (
<div className="donardetails">
      <center>
        <div className="con">
          <table className="table table-bordered s">
            <thead>
              <tr>
                 Donor name
             </tr>
             <tr>
                Donor email
             </tr>
             <tr>
                Donor Donation
             </tr>
             <tr>
                Donor Project Code
             </tr>
             <tr>
               Project Name
             </tr>
             <tr>
               project description
             </tr>
             <tr>
               Project Place
             </tr>
                  
            </thead>
            <tbody>
              {data.map((details) => (
                <tr key={details.projectCode}>
                  <td scope="row">{details.projectCode}</td>

                  <td>{details.donorname}</td>

                  <td>{details.donoremail}</td>

                  <td>{details.donordonation}</td>
                  <td>{details.project_name}</td>
                  <td>{details.project_description}</td>
                  <td>{details.projectplace}</td>

                
                 
                </tr>
              ))}
            </tbody>
           
          </table>
        </div>
      </center>
    </div>
  );
}
export default GetDonor;
