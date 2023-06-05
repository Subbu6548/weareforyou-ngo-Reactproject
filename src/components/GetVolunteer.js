import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../style.css";
function GetVolunteer() {
 
  
  const { id }=useParams();
  useEffect(() => {
    loadDetails();
  }, []);

const [data,setData]=useState([]

);
const loadDetails =async()=>
  {
    return axios
     .get(`http://localhost:8080/api/volunteer/${id}`)
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
        <table className="table table-bordered" >
          <thead>
        <tr>
            <th>Volunteer Project Code :</th>
            <th>Volunteer name :</th>
            <th>Volunteer email :</th>
            <th>Project Name :</th>
            <th>project description :</th>
            <th>Project Place :</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>{JSON.stringify(data.projectCode)}</td>
            <td>{JSON.stringify(data.volunteername)}</td>
            <td>{JSON.stringify(data.volunteeremail)}</td>
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
export default GetVolunteer;
