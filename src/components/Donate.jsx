import React from "react";
import "../style.css";
import { useState } from "react";
import axios from "axios";

const Donate = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phnumber: "",
    amount: "",
    type: "",
    cardn: "",

    exp: "",
    cvv: "",
  });
  const changehandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submithandler = (e) => {
    e.preventDefault();
   alert("thanks for donation")
    
   axios.post("http://localhost:8080/donate",data).then(
    (res)=>console.log(res.data)
   ).catch(
    (ex)=>console.log(ex)
   )

  };
  return (
    <div>
      <center>
        <h1 className="fg">To Donate</h1>
      </center>

      <form className="form1" onSubmit={submithandler} >
        <center>
          <p >Donator Details</p>

          <p>Name</p>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={changehandler} required
          />
          <br/> <br/>
          <p>emailadress</p>
          <input
            type="email"
            name="email"
            placeholder="@gmail.com"
            onChange={changehandler}
          />
            <br/>  <br/>
          <p>Phone Number</p>
          <input type="number" name="phnumber" onChange={changehandler} required/>
          <br/>  <br/>

          <p className="donate">Donation Details</p>

          <p>Donation Amount</p>
          <input type="number" name="amount" onChange={changehandler} required/>
          <br/>  <br/>

          <p>Select Card Type  </p>
          <select name="type" onChange={changehandler} required>
            <option value="">--select Mode--</option>
            <option value="visa">visa</option>
            <option value="rupay">rupay</option>
            <option value="master">mastercard</option>
          </select>
          <br/>  <br/>

          <p>Card Number</p> 
          <input type="number" name="cardn" onChange={changehandler} required/>  <br/> <br/>
          <p>expiry date</p>
          <input type="date" name="exp" onChange={changehandler} required /> <br/> <br/>
          <p>cvv</p>
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

export default Donate;
