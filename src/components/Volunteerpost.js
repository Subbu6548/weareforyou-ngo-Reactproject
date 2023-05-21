import React from "react";

import { useState } from "react";
import axios from "axios";



function Volunteerpost(){

   const  [data, setData] = useState({
    volunteer_name: "",
    volunteer_email: "",
    volunteer_project_code: "",
    volunteer_phno: "",
    volunteer_address:""
  })
  const changehandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submithandler = (e) => {
    e.preventDefault();
   alert("Details have been uploaded successfully")
    
   axios.post("http://localhost:8080/api/volunteer",data).then(
    (res)=>console.log(res.data)
   ).catch(
    (ex)=>console.log(ex)
   )

  };
  return (
    <div>
      <center>
        <h1 className="fg">VOLUNTEER REGISTRATION INFORMATION</h1>
      </center>

      <form className="form1" onSubmit={submithandler} >
        <center>
          <p >-------VOLUNTEER DETAILS--------</p>
<br/>
          
          <p>VOLUNTEER NAME</p>
          <input
            type="text"
            name="volunteer_name"
            placeholder="Enter your name"
            onChange={changehandler}
          />
            <br/>  <br/>
            <p>VOLUNTEER EMAIL</p>
          <input
            type="email"
            name="volunteer_email"
            placeholder="Enter your email"
            onChange={changehandler}
          />
            <br/>  <br/>
          
          <p>VOLUNTEER PHONE NUMBER</p>
          <input type="number" name="volunteer_phno" placeholder="Enter phone number" onChange={changehandler} required/>
          <br/> <br/>


          <p>VOLUNTEER ADDRESS</p>
          <input
            type="text"
            name="volunteer_address"
            placeholder="Enter present address"
            onChange={changehandler}
          />
          <br/> <br/>


          <p>VOLUNTEER PROJECT CODE</p>
          <input
            type="number"
            name="volunteer_project_code"
            placeholder="Enter project code "
            onChange={changehandler}
          />
          <br/>  <br/>
          <div className="primary">
            <input className="primary" type="submit"  />
          </div>
         <hr style={{color:"white"}}/>
        </center>
      </form>
    </div>
  );
};

export default Volunteerpost;