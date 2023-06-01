import axios from "axios";
import "../style.css";
import React, { useEffect, useState } from "react";

function Donarpost() {

    
   const  [data, setData] = useState({
    donor_name: "",
    donor_email: "",
    donor_project_code: "",
    donor_phno: "",
    donation: "",
    type: "",
    cardn: "",
    exp: "",
    cvv: "",
  })
  const changehandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submithandler = (e) => {
    e.preventDefault();
   alert("thanks for donation")
    
   axios.post("http://localhost:8083/api/donor",data).then(
    (res)=>console.log(res.data)
   ).catch(
    (ex)=>console.log(ex)
   )

  };
  return (
    <div>
 
      <form className="form1" onSubmit={submithandler} >
      
        <center>
        <h1 className="fg">TO DONATE</h1>
          <p >DONOR DETAILS</p>

          <p>DONOR NAME</p>
          <input
            type="text"
            name="donor_name"
            placeholder="Enter name"
            onChange={changehandler} required
          />
          <br/> <br/>
          <p>EMAIL ADDRESS</p>
          <input
            type="email"
            name="donor_email"
            placeholder="Enter email address"
            onChange={changehandler}
          />
           <br/> <br/>
          <p>PROJECT CODE TO WHICH YOU WANT TO DONATE</p>
          <input
            type="number"
            name="donor_project_code"
            placeholder="Enter project code"
            onChange={changehandler}
          />
            <br/>  <br/>
          <p>PHONE NUMBER</p>
          <input type="number" name="donor_phno" onChange={changehandler} required/>
          <br/>  <br/>

          <p className="donate">Donation Details</p>

          <p>DONATION AMOUNT</p>
          <input type="number" name="donation" onChange={changehandler} required/>
          <br/>  <br/>

          <p>SELECT CARD TYPE</p>
          <select name="type" onChange={changehandler} required>
            <option value="">--SELECT MODE--</option>
            <option value="visa">VISA</option>
            <option value="rupay">RUPAY</option>
            <option value="master">MASTERCARD</option>
          </select>
          <br/>  <br/>

          <p>CARD NUMBER</p> 
          <input type="number" name="cardn" onChange={changehandler} required/>  <br/> <br/>
          <p>EXPIRY DATE</p>
          <input type="date" name="exp" onChange={changehandler} required /> <br/> <br/>
          <p>CVV</p>
          <input type="password" name="cvv" onChange={changehandler} required style={{width:"50px"}}/> <br/> <br/>
          <div className="primary">
            <input className="primary" type="submit"  />
          </div>
         <hr style={{color:"white"}}/>
        </center>
      </form>
    </div>
    
  );
};

export default Donarpost;