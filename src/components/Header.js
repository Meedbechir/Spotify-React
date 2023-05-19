import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container-fluid p-0">
        <nav className="d-flex justify-content-center align-items-center py-4 m-0">
          <div className="ms-auto">
            <button className="btn text-light ms-5">Sign Up</button>
            <button className="btn btn-light me-5 bg-white">Log In</button>
          </div>
        </nav>
      </div>
      <div className="line"></div>
    </header>
  );
}

export default Header;
