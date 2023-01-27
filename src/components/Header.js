import React from 'react';


const Header = () => {
  return (
    <div className="navigation container p-0 box-shadow">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a href="index.html" className="navbar-brand mb-1">
          Jalebi Jodi
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item custom-nav">
              <a className="nav-link active" aria-current="page" href="#">
                PROFILE REVIEWS
              </a>
            </li>
            <li className="nav-item custom-nav">
              <a className="nav-link" href="#">
                COACHING
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  

  


  )
}

export default Header;