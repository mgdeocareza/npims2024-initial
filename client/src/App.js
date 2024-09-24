import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import PropertiesList from "./components/properties-list.component";
import EditProperty from "./components/edit-property.component";
import CreateProperty from "./components/create-property.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Navbar />
        <br />
        <Routes>
          <Route path="/" exact element={<PropertiesList />} />
          <Route path="/edit/:id" element={<EditProperty />} />
          <Route path="/create" element={<CreateProperty />} />
          <Route path="/user" element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
