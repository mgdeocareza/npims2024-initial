// Header.js
import React from "react";
import { Link } from "react-router-dom";
import npims_logo from './npims-logo-b.png'; 
import mainlib_logo from './mainlib-logo.png'; 
import uplb_logo from './uplb-logo.png'; 

// const Header = ({ toggleSidebar }) => {
//   return (
//     <div style={{ backgroundColor: '#8a1538', padding: '10px', position: 'relative', zIndex: 1 }}>
//       <button onClick={toggleSidebar} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>
//         ☰ {/* Hamburger icon */}
//       </button>
//       <div className="d-flex justify-content-center">
//         <img src={mainlib_logo} alt="Logo 1" style={{ height: '50px', marginRight: '10px' }} />
//         <img src={uplb_logo} alt="Logo 2" style={{ height: '50px' }} />
//       </div>
//     </div>
//   );
// }



const Header = ({ toggleSidebar }) => {
    return (
        <nav style={{ backgroundColor: '#8a1538', width: '100%' }} className="navbar navbar-dark navbar-expand-lg container-fluid">
        <button onClick={toggleSidebar} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>
            ☰ {/* Hamburger icon */}
        </button>   
        <Link to="/" className="navbar-brand">
          <img src={npims_logo} alt="NPIMS Logo" style={{ height: '40px' }} />
        </Link>
        <div className="ml-auto d-flex align-items-center">
          <img src={mainlib_logo} alt="Logo 1" style={{ height: '50px', marginRight: '10px' }} />
          <img src={uplb_logo} alt="Logo 2" style={{ height: '50px' }} />
        </div>
      </nav>
    );

}

export default Header;
