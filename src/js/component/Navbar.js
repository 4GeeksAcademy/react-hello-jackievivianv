import React from "react";

function Navbar(){

  return (

    <nav className="navbar navbar-expand-lg-md-sm bg-dark">
    <div className="container">
      <a className="navbar-brand text-light" href="#">Start Boostrap</a>
      <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary" href="#">Services</a>
          </li>
          <li className="nav-item text-light">
            <a className="nav-link disabled text-secondary" aria-disabled="true">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>


 )}

export default Navbar;
