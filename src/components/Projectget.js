import axios from "axios";
import "../style.css";
import React, { useEffect, useState } from "react";



function Projectget() {

    useEffect(() => {
        loadDetails();
      }, []);

    const [data,setData]=useState([]);
    
  const loadDetails =async()=>
  {
     const result =await  axios
     .get("http://localhost:8082/api/project");
     setData(result.data);
  }
  return(
  <div className="donardetails">
  <center>
    <div className="con">
      <table className="table table-bordered s">
        <thead>
          <tr>
            

            <th>project code</th>

            <th>project name</th>

            <th>project description</th>

         
          </tr>
        </thead>
        <tbody>
          {data.map((details) => (
            <tr >
              

              <td scope="row">{details.projectCode}</td>

              <td>{details.project_name}</td>
              <td>{details.project_desc}</td>

            </tr>
          ))}
        </tbody>
      </table>
</div>
    
  </center>
</div>
 
  );
};

export default Projectget;