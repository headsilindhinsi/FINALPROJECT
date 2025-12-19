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
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
    addToCart,
  } = useContext(MyContext);

  const navigate = useNavigate();

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
          fontFamily: "'Lora', serif",
          backgroundColor: scrolled ? "#fffaf3" : "transparent",
          transition: "all 0.3s ease",
        }}
      >
        <div className="container d-flex justify-content-between align-items-center">
          {/* Brand */}
          <a
            href="/"
            className="navbar-brand fw-bold text-uppercase"
            style={{
              color: "#bfa76f",
              fontSize: "28px",
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "1px",
            }}
          >
            All4Home
          </a>

          {/* Hamburger for mobile */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
          >
            <span className="bi bi-list fs-2" style={{ color: "#bfa76f" }}></span>
          </button>

          {/* Center Menu (Desktop only) */}
          <div className="collapse navbar-collapse justify-content-center d-none d-lg-flex">
            <ul className="navbar-nav gap-4 text-uppercase small fw-semibold">
              <li className="nav-item">
                <Link className="nav-link text-dark custom-nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark custom-nav-link"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul
                  className="dropdown-menu border-0 shadow-sm"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/Products">
                      Shop Home
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/LivingRoom">
                      Living Room
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/BedRoom">
                      Bedroom
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/DiningRoom">
                      Dining Room
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Decor">
                      Home Decor
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-dark custom-nav-link" to="/About-Us">
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-dark custom-nav-link" to="/Contact-Us">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* ---------------- RIGHT SIDE ICONS ---------------- */}
          <div className="d-flex align-items-center">
            <i
              className="bi bi-search-heart ms-3 fs-5 text-dark d-none d-lg-block"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTop"
              aria-controls="offcanvasTop"
              style={{ cursor: "pointer" }}
            ></i>

            {/* ❤️ Wishlist Icon */}
            <i
              className="bi bi-heart fs-5 text-dark position-relative ms-3 d-none d-lg-block"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWishlist"
              aria-controls="offcanvasWishlist"
              style={{ cursor: "pointer" }}
            >
              {wishlistItems.length > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-light"
                  style={{ fontSize: "10px" }}
                >
                  {wishlistItems.length}
                </span>
              )}
            </i>

            {/* 🛒 Cart Icon */}
            <i
              className="bi bi-cart4 fs-5 text-dark position-relative ms-3 d-none d-lg-block"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              style={{ cursor: "pointer" }}
            >
              {cartItems.length > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-light"
                  style={{ fontSize: "10px" }}
                >
                  {cartItems.length}
                </span>
              )}
            </i>
          </div>
        </div>
      </nav>

      {/* ---------------- MOBILE MENU (OFFCANVAS) ---------------- */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header d-flex justify-content-between align-items-center">
          <a
            href="/"
            className="navbar-brand fw-bold text-uppercase mb-0"
            style={{
              color: "#bfa76f",
              fontSize: "24px",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            All4Home
          </a>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <div className="accordion accordion-flush" id="accordionMenu">
            {/* Home */}
            <div className="accordion-item border-0">
              <h2 className="accordion-header">
                <Link
                  to="/"
                  className="accordion-button collapsed text-dark bg-transparent shadow-none"
                  data-bs-dismiss="offcanvas"
                >
                  Home
                </Link>
              </h2>
            </div>

            {/* Shop */}
            <div className="accordion-item border-0">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed text-dark bg-transparent shadow-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#shopMenu"
                  aria-expanded="false"
                  aria-controls="shopMenu"
                >
                  Shop
                </button>
              </h2>
              <div
                id="shopMenu"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionMenu"
              >
                <div className="accordion-body ps-4">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/Products" className="text-dark" data-bs-dismiss="offcanvas">
                        Shop Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/LivingRoom" className="text-dark" data-bs-dismiss="offcanvas">
                        Living Room
                      </Link>
                    </li>
                    <li>
                      <Link to="/BedRoom" className="text-dark" data-bs-dismiss="offcanvas">
                        Bedroom
                      </Link>
                    </li>
                    <li>
                      <Link to="/DiningRoom" className="text-dark" data-bs-dismiss="offcanvas">
                        Dining Room
                      </Link>
                    </li>
                    <li>
                      <Link to="/Decor" className="text-dark" data-bs-dismiss="offcanvas">
                        Home Decor
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="accordion-item border-0">
              <h2 className="accordion-header">
                <Link
                  to="/About-Us"
                  className="accordion-button collapsed text-dark bg-transparent shadow-none"
                  data-bs-dismiss="offcanvas"
                >
                  About Us
                </Link>
              </h2>
            </div>

            {/* Contact */}
            <div className="accordion-item border-0">
              <h2 className="accordion-header">
                <Link
                  to="/Contact-Us"
                  className="accordion-button collapsed text-dark bg-transparent shadow-none"
                  data-bs-dismiss="offcanvas"
                >
                  Contact Us
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- STYLES ---------------- */}
      <style>{`
        .custom-nav-link:hover {
          color: #bfa76f !important;
        }
        .dropdown-menu .dropdown-item:hover {
          background-color: #f4f0e6;
          color: #bfa76f;
        }
        .offcanvas {
          background-color: #fffaf3;
        }
        .offcanvas-header {
          border-bottom: 1px solid rgba(191, 167, 111, 0.2);
        }
        .accordion-button {
          font-family: 'Lora', serif;
          font-size: 15px;
        }
        .accordion-button:focus {
          box-shadow: none;
        }
        .accordion-button:not(.collapsed) {
          color: #bfa76f;
          background-color: transparent;
        }
        .accordion-body a:hover {
          color: #bfa76f !important;
        }
      `}</style>
    </>
  );
};

export default Navbar;
