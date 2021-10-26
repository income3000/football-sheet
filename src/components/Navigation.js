import React from 'react';

import { Link } from 'react-router-dom';
export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <Link to="/"><span>Home</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {/* <li className="nav-item nav-link">
        <Link to="/"><span>Home</span></Link>
        </li> */}
        <li className="nav-item nav-link">
          <Link to="./Form"><span>Form</span></Link>
        </li>
        <li className="nav-item nav-link">
        <Link to="./Table"><span>Sheet</span></Link>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
    )
}
