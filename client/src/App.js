// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Sidebar from "./components/sidebar";
import Header from "./components/header"; 
import PropertiesList from "./components/properties-list.component";
import EditProperty from "./components/edit-property.component";
import CreateProperty from "./components/create-property.component";
import CreateUser from "./components/create-user.component";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State for sidebar visibility

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="d-flex">
        <Header toggleSidebar={toggleSidebar} />
        {isSidebarOpen && <Sidebar />} {/* Conditionally render the sidebar */}
        <div style={{ marginLeft: isSidebarOpen ? '200px' : '50px', transition: 'margin-left 0.3s' }}>
          <Routes>
            <Route path="/" exact element={<PropertiesList />} />
            <Route path="/edit/:id" element={<EditProperty />} />
            <Route path="/create" element={<CreateProperty />} />
            <Route path="/user" element={<CreateUser />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
