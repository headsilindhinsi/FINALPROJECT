import React from "react";
import { Logo } from "../../assets/assets";


const ShopNavbar = () => {
  return (
    <>
    
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 border-bottom">
        <div className="container d-flex align-items-center justify-content-between">

          {/* Left: Logo */}
          <div className="d-flex align-items-center">
            <img src={Logo.logo} alt="logo" className="img-fluid me-2" style={{ height: "35px" }}
            />
     
          </div>

          {/* Center: Navbar Links */}
          <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
            <ul className="navbar-nav gap-4 mx-auto text-center">
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-uppercase" href="/Shop" id="navbarDropdown" role="button" data-bs-toggle="dropdown" >
                  Shop
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/LivingRoom">
                      Living Room
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/BedRoom">
                      Bed Room
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="/Abou">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="/Contct">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="/Blog">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Search + Cart */}
          <div className="d-flex align-items-center gap-4">
            <p className="fs-6 mb-0 text-uppercase">
              Search <i className="bi bi-search ms-1"></i>
            </p>
            <i className="bi bi-cart4 fs-5"></i>
          </div>

          {/* Toggler (for mobile) */}
          <button
            className="navbar-toggler ms-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default ShopNavbar;
