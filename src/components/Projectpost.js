

import React from "react";

import { useState } from "react";
import axios from "axios";



function Projectpost() {

   const  [data, setData] = useState({
    projectCode: "",
    project_name: "",
    project_desc: "",
    projectplace: "",
    projectdate: "",
   
  })
  const changehandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submithandler = (e) => {
    e.preventDefault();
  alert("project have been added successfully");
   axios.post("http://localhost:8082/api/project",data).then(
    (res)=>console.log(res.data)
   ).catch(
    (ex)=>console.log(ex)
   )
  };
  return (
    <div>
      <center>
        <h1 className="fg">PROJECT INFORMATION</h1>
      </center>

      <form className="form1" onSubmit={submithandler} >
        <center>
          <p >-------PROJECT DETAILS--------</p>
<br/>
          <p>PROJECT CODE</p>
          <input type="number" name="projectCode" placeholder="Enter project code" onChange={changehandler} required/>
          <br/> <br/>
          <p>PROJECT NAME</p>
          <input
            type="text"
            name="project_name"
            placeholder="Enter project name"
            onChange={changehandler}
          />
            <br/>  <br/>
          <p>PROJECT DESCRIPTION</p>
          <input
            type="text"
            name="project_desc"
            placeholder="Enter project description"
            onChange={changehandler}
          />
          <br/>  <br/>

          <p>PROJECT PLACE</p>
          <input
            type="text"
            name="projectplace"
            placeholder="Enter project place"
            onChange={changehandler}
          />
          <br/>  <br/>

          <p>PROJECT DATE</p>
          <input
            type="text"
            name="projectdate"
            placeholder="Date of project"
            onChange={changehandler}
          />
          <br/>  <br/>
          
         <hr style={{color:"white"}}/>
         <div className="primary">
            <input className="primary" type="submit"  />
          </div>
        </center>
      </form>
    </div>
  );
};

export default Projectpost;
