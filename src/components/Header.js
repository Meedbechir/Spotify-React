import React from 'react';
import Logo from '../Images/sp.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container-fluid p-0">
        <nav className="d-flex justify-content-center align-items-center py-4 m-0">
          <img src={Logo} alt="" className="header-logo" />
          <div className="ms-auto">
            <button className="btn text-white me-2">Sign Up</button>
            <button className="btn btn-outline-light me-1">Log In</button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
