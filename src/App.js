import React from "react";
import Main from "./components/Main";
import Cards from "./components/Carding";
import Signin from "./components/Signin";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Campaign from "./components/Campaign";
import Carding from "./components/Carding";


import { Routes, Route, NavLink } from "react-router-dom";

import Donarpost from "./components/Donarpost";
import Projectpost from "./components/Projectpost";
import Projectget from "./components/Projectget";
import NavBar from "./components/NavBar";
import Donorget from "./components/Donorget";
import GetDonor from "./components/GetDonor";
import Volunteerpost from "./components/Volunteerpost";
import Volunteerget from "./components/Volunteerget";
import GetVolunteer from "./components/GetVolunteer";
const App = () => {
  return (
    <div>
     <NavBar/>

      <Routes>
       
      
        <Route path="/Donarpost" element={<Donarpost/>} />
        <Route path="/Projectpost" element={<Projectpost/>} />
        <Route path="/Campaign" element={<Campaign />} />
      
        <Route path="/Getdonor/:id" element={<GetDonor/>} />
        <Route path="/GetVolunteer/:id" element={<GetVolunteer/>} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Projectget" element={<Projectget />} />
        <Route path="/Main" component={<Main />} />
        <Route path="/Carding" component={<Cards/>} />
        
        <Route path="/Signin" element={<Signin/>} />
        <Route path="/Donorget" element={<Donorget/>} />
        <Route path="/Footer" component={<Footer />} />
 
        <Route path="/Volunteerpost" element={<Volunteerpost/>} />
        <Route path="/Volunteerget" element={<Volunteerget/>} />
        
      </Routes>
      <Main />
      <Carding />
      <Footer />
    </div>
  );
};

export default App;
