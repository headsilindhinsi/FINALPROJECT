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
    setInput,
    SearchFun,
    
    filteredData,
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
        <div className="container d-flex align-items-center justify-content-between">
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

          {/* ---------------- RIGHT SIDE ICONS + HAMBURGER ---------------- */}
          <div className="d-flex align-items-center">
            {/* 🔍 Search */}
            <i
              className="bi bi-search-heart ms-3 fs-5 text-dark d-none d-lg-block"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTop"
              aria-controls="offcanvasTop"
              style={{ cursor: "pointer" }}
            ></i>

            {/* ❤️ Wishlist */}
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

            {/* 🛒 Cart */}
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

            {/* 🍔 Hamburger (Mobile only, now right end) */}
            <button
              className="navbar-toggler border-0 d-lg-none ms-3"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileMenu"
              aria-controls="mobileMenu"
            >
              <span className="bi bi-list fs-2" style={{ color: "#bfa76f" }}></span>
            </button>
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
                  className="accordion-button collapsed text-dark text-decoration-none bg-transparent shadow-none"
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
                  className="accordion-button collapsed text-dark bg-transparent text-decoration-none shadow-none"
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
                      <Link to="/Products" className="text-dark text-decoration-none" data-bs-dismiss="offcanvas">
                        Shop Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/LivingRoom" className="text-dark text-decoration-none" data-bs-dismiss="offcanvas">
                        Living Room
                      </Link>
                    </li>
                    <li>
                      <Link to="/BedRoom" className="text-dark text-decoration-none" data-bs-dismiss="offcanvas">
                        Bedroom
                      </Link>
                    </li>
                    <li>
                      <Link to="/DiningRoom" className="text-dark text-decoration-none" data-bs-dismiss="offcanvas">
                        Dining Room
                      </Link>
                    </li>
                    <li>
                      <Link to="/Decor" className="text-dark text-decoration-none" data-bs-dismiss="offcanvas">
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
                  className="accordion-button collapsed text-dark bg-transparent text-decoration-none shadow-none"
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
                  className="accordion-button collapsed text-dark text-decoration-none bg-transparent shadow-none"
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
   
     {/* ---------------- SEARCH OFFCANVAS (PREMIUM FULLSCREEN) ---------------- */}
<div
  className="offcanvas offcanvas-top premium-search"
  tabIndex="-1"
  id="offcanvasTop"
  aria-labelledby="offcanvasTopLabel"
  data-bs-scroll="true"
>
  <div className="premium-search-container">

    {/* Close button */}
    <button
      type="button"
      className="premium-close-btn"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    >
      ✕
    </button>

    {/* Heading */}
    <h1 className="premium-search-title">Search</h1>

    {/* Search Input */}
    <input
      className="premium-search-input"
      placeholder="Search products, rooms, décor..."
      onChange={(e) => {
        setInput(e.target.value);
        SearchFun(e.target.value);
      }}
    />

    {/* Results */}
    <div className="container mt-5">
      <div className="row">

        {filteredData.length === 0 ? (
          <div className="col-12 text-center mt-5">
            <p className="text-muted">No matching results found.</p>
          </div>
        ) : (
          filteredData.map((value, index) => (
            <div
              className="col-lg-3 col-md-6 col-12 my-3"
              key={index}
              onClick={() => navigate(`/Dynamic/${value.id}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="premium-result-card">
                <img src={value.img} alt={value.Name} className="premium-result-img" />
                <div className="premium-result-content">
                  <p className="premium-result-type">{value.type}</p>
                  <h5 className="premium-result-name">{value.Name}</h5>
                  <p className="premium-result-price">₹{value.price}</p>
                </div>
              </div>
            </div>
          ))
        )}

      </div>
    </div>
  </div>
</div>


      {/* ---------------- WISHLIST OFFCANVAS ---------------- */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasWishlist"
        aria-labelledby="offcanvasWishlistLabel"
        data-bs-scroll="true"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWishlistLabel">
            ❤ Wishlist
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          {wishlistItems.length === 0 ? (
            <p className="text-muted text-center mt-5">
              💔 Your wishlist is empty.
            </p>
          ) : (
            <>
              {wishlistItems.map((item, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center justify-content-between border-bottom py-2"
                >
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={item.img}
                      alt={item.Name}
                      width="60"
                      height="60"
                      className="rounded"
                    />
                    <div>
                      <p className="mb-0 fw-semibold">{item.Name}</p>
                      <small className="text-muted">₹{item.price}</small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <i
                      className="bi bi-cart-plus text-success"
                      role="button"
                      title="Add to Cart"
                      onClick={() => addToCart(item)}
                    ></i>
                    <i
                      className="bi bi-trash text-danger"
                      role="button"
                      title="Remove"
                      onClick={() => removeFromWishlist(item.id)}
                    ></i>
                  </div>
                </div>
              ))}

              <div className="mt-4 border-top pt-3">
                <button
                  className="btn btn-outline-danger w-100"
                  onClick={clearWishlist}
                >
                  Clear Wishlist
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ---------------- CART OFFCANVAS ---------------- */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        data-bs-scroll="true"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            🛒 Your Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          {cartItems.length === 0 ? (
            <p className="text-muted text-center mt-5">
              🛍 Your cart is empty.
            </p>
          ) : (
            <>
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center justify-content-between border-bottom py-2"
                >
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={item.img}
                      alt={item.Name}
                      width="60"
                      height="60"
                      className="rounded"
                    />
                    <div>
                      <p className="mb-0 fw-semibold">{item.Name}</p>
                      <small className="text-muted">
                        ₹{item.price} × {item.quantity}
                      </small>
                    </div>
                  </div>
                  <i
                    className="bi bi-trash text-danger"
                    role="button"
                    onClick={() => removeFromCart(item.id)}
                  ></i>
                </div>
              ))}

              <div className="mt-4 border-top pt-3">
                <h6 className="fw-bold">Total: ₹{getCartTotal().toFixed(2)}</h6>
                <button className="btn btn-dark w-100 mt-3">Checkout</button>
                <button
                  className="btn btn-outline-danger w-100 mt-2"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
            </>
        )}
        </div>
      </div>
    </>

  );
};

export default Navbar;
