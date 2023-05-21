import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Cards from "./components/Carding";
import Signin from "./components/Signin";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Campaign from "./components/Campaign";
import Carding from "./components/Carding";
import Donate from "./components/Donate";
import Todonate from "./components/Todonate";
import Donardetails from "./components/Donardetails";
import { Routes, Route, NavLink } from "react-router-dom";
import EditUser from "./components/EditUser";
import Donarpost from "./components/Donarpost";
import Projectpost from "./components/Projectpost";
import Projectget from "./components/Projectget";
import NavBar from "./components/NavBar";
import Donorget from "./components/Donorget";
import GetDonor from "./components/GetDonor";

const App = () => {
  return (
    <div>
     <NavBar/>

      <Routes>
        <Route path="/" component={<Nav />} />
        <Route path="/Donate" element={<Donate />} />
        <Route path="/Donarpost" element={<Donarpost/>} />
        
        <Route path="/Projectpost" element={<Projectpost/>} />
        <Route path="/Campaign" element={<Campaign />} />
        <Route path="/EditUser/:id" element={<EditUser />} />
        <Route path="/Getdonor/:id" element={<GetDonor/>} />

        <Route path="/Work" element={<Work />} />
        <Route path="/Projectget" element={<Projectget />} />
        <Route path="/Main" component={<Main />} />
        <Route path="/Carding" component={<Cards/>} />
        <Route path="/Todonate" element={<Todonate/>} />
        <Route path="/Signin" element={<Signin/>} />
        <Route path="/Donorget" element={<Donorget/>} />
        <Route path="/Footer" component={<Footer />} />
        <Route path="/Donardetails" element={<Donardetails />} />  
      </Routes>
      <Main />
      <Carding />
      <Footer />
    </div>
  );
};

export default App;
