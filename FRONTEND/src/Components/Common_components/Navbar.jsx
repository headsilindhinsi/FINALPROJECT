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
      {/* ================= NAVBAR ================= */}
      <nav
        className={`navbar navbar-expand-lg fixed-top py-3 ${
          scrolled ? "shadow-sm" : ""
        }`}
        style={{
          backgroundColor: scrolled ? "#fffaf3" : "transparent",
          transition: "0.3s",
          zIndex: 1030,
        }}
      >
        <div className="container">
          {/* Brand */}
          <Link
            to="/"
            className="navbar-brand fw-bold"
            style={{
              color: "#bfa76f",
              fontFamily: "'Playfair Display', serif",
              fontSize: "28px",
            }}
          >
            All4Home
          </Link>

          {/* Desktop Menu */}
          <div className="collapse navbar-collapse d-none d-lg-flex justify-content-center">
            <ul className="navbar-nav gap-4 fw-semibold small text-uppercase">
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/Home">Home</Link>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark" data-bs-toggle="dropdown">
                  Shop
                </a>
                <ul className="dropdown-menu border-0 shadow-sm">
                  <li><Link className="dropdown-item" to="/Products">Shop Home</Link></li>
                  <li><Link className="dropdown-item" to="/LivingRoom">Living Room</Link></li>
                  <li><Link className="dropdown-item" to="/BedRoom">Bedroom</Link></li>
                  <li><Link className="dropdown-item" to="/DiningRoom">Dining Room</Link></li>
                  <li><Link className="dropdown-item" to="/Decor">Home Decor</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-dark" to="/About-Us">About Us</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-dark" to="/Contact-Us">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Right Icons */}
          <div className="d-flex align-items-center">
            {/* Search */}
            <i
              className="bi bi-search-heart fs-5 ms-3"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTop"
            ></i>

            {/* Wishlist */}
            <i
              className="bi bi-heart fs-5 ms-3 position-relative"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWishlist"
            >
              {wishlistItems.length > 0 && (
                <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                  {wishlistItems.length}
                </span>
              )}
            </i>

            {/* Cart */}
            <i
              className="bi bi-cart4 fs-5 ms-3 position-relative"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasCart"
            >
              {cartItems.length > 0 && (
                <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                  {cartItems.length}
                </span>
              )}
            </i>
          </div>
        </div>
      </nav>

      {/* ================= SEARCH OFFCANVAS ================= */}
      <div className="offcanvas offcanvas-top" id="offcanvasTop">
        <div className="offcanvas-body">
          <input
            className="form-control mb-4"
            placeholder="Search products..."
            onChange={(e) => {
              setInput(e.target.value);
              SearchFun(e.target.value);
            }}
          />

          <div className="row g-4">
            {filteredData.map((value) => (
              <div
                className="col-lg-3 col-md-6"
                key={value.id}
                onClick={() => navigate(`/Dynamic/${value.id}`)}
              >
                <div className="card position-relative p-2">
                  <img src={value.img} className="w-100" alt="" />

                  {/* ❤️ HEART ICON (LIKE YOUR FIRST PROJECT) */}
                  <i
                    className={`bi ${
                      wishlistItems.some(item => item.id === value.id)
                        ? "bi-suit-heart-fill text-danger"
                        : "bi-suit-heart"
                    } position-absolute top-0 end-0 m-2 fs-5`}
                    onClick={(e) => {
                      e.stopPropagation();
                      wishlistItems.some(item => item.id === value.id)
                        ? removeFromWishlist(value.id)
                        : addToWishlist(value);
                    }}
                  ></i>

                  <div className="text-center mt-2">
                    <h6>{value.Name}</h6>
                    <p>₹{value.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= WISHLIST ================= */}
      <div className="offcanvas offcanvas-end" id="offcanvasWishlist">
        <div className="offcanvas-header">
          <h5>Wishlist</h5>
          <button className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>

        <div className="offcanvas-body">
          {wishlistItems.length === 0 ? (
            <p className="text-center text-muted">Your wishlist is empty</p>
          ) : (
            <>
              {wishlistItems.map(item => (
                <div key={item.id} className="d-flex justify-content-between align-items-center border-bottom py-2">
                  <div className="d-flex gap-2 align-items-center">
                    <img src={item.img} width="50" alt="" />
                    <div>
                      <p className="mb-0">{item.Name}</p>
                      <small>₹{item.price}</small>
                    </div>
                  </div>

                  <div className="d-flex gap-3">
                    <i className="bi bi-cart-plus text-success" onClick={() => addToCart(item)}></i>
                    <i className="bi bi-trash text-danger" onClick={() => removeFromWishlist(item.id)}></i>
                  </div>
                </div>
              ))}

              <button className="btn btn-outline-danger w-100 mt-3" onClick={clearWishlist}>
                Clear Wishlist
              </button>
            </>
          )}
        </div>
      </div>

      {/* ================= CART ================= */}
      <div className="offcanvas offcanvas-end" id="offcanvasCart">
        <div className="offcanvas-header">
          <h5>Your Cart</h5>
          <button className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>

        <div className="offcanvas-body">
          {cartItems.length === 0 ? (
            <p className="text-center text-muted">Your cart is empty</p>
          ) : (
            <>
              {cartItems.map(item => (
                <div key={item.id} className="d-flex justify-content-between border-bottom py-2">
                  <p>{item.Name} × {item.quantity}</p>
                  <i className="bi bi-trash text-danger" onClick={() => removeFromCart(item.id)}></i>
                </div>
              ))}
              <h6 className="mt-3">Total: ₹{getCartTotal()}</h6>
              <button className="btn btn-dark w-100 mt-2">Checkout</button>
              <button className="btn btn-outline-danger w-100 mt-2" onClick={clearCart}>
                Clear Cart
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
