import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Campaign from "./components/Campaign";
import Donate from "./components/Donate";

import { Routes, Route } from "react-router-dom";
import Donardetails from "./components/Donardetails";
const App = () => {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" component={<Nav />} />
        <Route path="/Donate" element={<Donate />} />
        <Route path="/Campaign" element={<Campaign />} />

        <Route path="/Work" element={<Work />} />
        <Route path="/Main" component={<Main />} />
        <Route path="/Cards" component={<Cards/>} />

        <Route path="/Footer" component={<Footer />} />

        <Route path="/Donardetails" element={<Donardetails />} />

      </Routes>
      <Main />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
