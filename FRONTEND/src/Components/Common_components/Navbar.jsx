import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../Context/ContextProvider";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const {
    cartItems,
    removeFromCart,
    clearCart,
    getCartTotal,
    wishlistItems,
    removeFromWishlist,
    clearWishlist,
    addToCart,
    setInput,
    SearchFun,
    filteredData,
  } = useContext(MyContext);

  const navigate = useNavigate();

  /* 🔑 OFFCANVAS CLOSE FIX */
  const closeOffcanvas = () => {
    const offcanvasEl = document.querySelector(".offcanvas.show");
    if (offcanvasEl) {
      const bsOffcanvas =
        window.bootstrap.Offcanvas.getInstance(offcanvasEl);
      bsOffcanvas && bsOffcanvas.hide();
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ---------------- NAVBAR ---------------- */}
      <nav
        className={`navbar navbar-expand-lg fixed-top py-3 ${
          scrolled ? "navbar-scrolled shadow-sm" : "navbar-transparent"
        }`}
        style={{
          zIndex: 1030,
          backgroundColor: scrolled ? "#fffaf3" : "transparent",
          transition: "all 0.3s ease",
        }}
      >
        <div className="container d-flex align-items-center justify-content-between">
          {/* Brand */}
          <Link
            to="/"
            className="navbar-brand fw-bold"
            style={{
              color: "#bfa76f",
              fontSize: "28px",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            All4Home
          </Link>

          {/* Desktop Menu */}
          <div className="collapse navbar-collapse justify-content-center d-none d-lg-flex">
            <ul className="navbar-nav gap-4 text-uppercase small fw-semibold">
              <li className="nav-item">
                <Link className="nav-link" to="/Home">
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Shop
                </a>
                <ul className="dropdown-menu border-0 shadow-sm">
                  <Link className="dropdown-item" to="/Products">
                    Shop Home
                  </Link>
                  <Link className="dropdown-item" to="/LivingRoom">
                    Living Room
                  </Link>
                  <Link className="dropdown-item" to="/BedRoom">
                    Bedroom
                  </Link>
                  <Link className="dropdown-item" to="/DiningRoom">
                    Dining Room
                  </Link>
                  <Link className="dropdown-item" to="/Decor">
                    Home Decor
                  </Link>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/About-Us">
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Contact-Us">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Icons */}
          <div className="d-flex align-items-center">
            <i
              className="bi bi-search fs-5 ms-3 d-none d-lg-block"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTop"
            ></i>

            <i
              className="bi bi-heart fs-5 ms-3 position-relative d-none d-lg-block"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWishlist"
            >
              {wishlistItems.length > 0 && (
                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                  {wishlistItems.length}
                </span>
              )}
            </i>

            <i
              className="bi bi-cart4 fs-5 ms-3 position-relative d-none d-lg-block"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
            >
              {cartItems.length > 0 && (
                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                  {cartItems.length}
                </span>
              )}
            </i>

            {/* Mobile Hamburger */}
            <button
              className="navbar-toggler border-0 d-lg-none ms-3"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileMenu"
            >
              <span className="bi bi-list fs-2 text-warning"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* ---------------- MOBILE OFFCANVAS ---------------- */}
      <div className="offcanvas offcanvas-start" id="mobileMenu">
        <div className="offcanvas-header">
          <h5 className="fw-bold">All4Home</h5>
          <button className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li>
              <Link to="/Home" onClick={closeOffcanvas}>
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Shop
              </a>
              <ul className="dropdown-menu">
                <Link
                  className="dropdown-item"
                  to="/Products"
                  onClick={closeOffcanvas}
                >
                  Shop Home
                </Link>
                <Link
                  className="dropdown-item"
                  to="/LivingRoom"
                  onClick={closeOffcanvas}
                >
                  Living Room
                </Link>
                <Link
                  className="dropdown-item"
                  to="/BedRoom"
                  onClick={closeOffcanvas}
                >
                  Bedroom
                </Link>
                <Link
                  className="dropdown-item"
                  to="/DiningRoom"
                  onClick={closeOffcanvas}
                >
                  Dining Room
                </Link>
                <Link
                  className="dropdown-item"
                  to="/Decor"
                  onClick={closeOffcanvas}
                >
                  Home Decor
                </Link>
              </ul>
            </li>

            <li>
              <Link to="/About-Us" onClick={closeOffcanvas}>
                About Us
              </Link>
            </li>

            <li>
              <Link to="/Contact-Us" onClick={closeOffcanvas}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
