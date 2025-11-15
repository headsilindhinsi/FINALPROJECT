import React from "react";

const Footer = () => {
  return (
    <>
      {/* MAIN FOOTER */}
      <div className="container-fluid footer text-light py-5" style={{ background: "#111" }}>
        <div className="row">

          {/* BRAND + CONTACT */}
          <div className="col-lg-4 col-md-6 col-12 mb-5">
            <h3 className="fw-bold mb-3">All4Home</h3>
            <p className="text-secondary">
              Creating beautiful home experiences with curated furniture,
              premium decor & timeless designs to elevate every corner of your home.
            </p>

            <div className="d-flex gap-3 mt-4">
              <i className="bi bi-geo-alt-fill fs-5"></i>
              <p className="mb-0">
                620 Eighth Avenue, New York <br />
                NY 10018
              </p>
            </div>

            <div className="d-flex gap-3 mt-2">
              <i className="bi bi-envelope-heart-fill fs-5"></i>
              <p className="mb-0">support@All4Home.com</p>
            </div>

            <div className="d-flex gap-3 mt-2">
              <i className="bi bi-phone-fill fs-5"></i>
              <p className="mb-0">+1 (212) 556-3622</p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="d-flex gap-3 mt-4">
              <i className="bi bi-facebook fs-4"></i>
              <i className="bi bi-instagram fs-4"></i>
              <i className="bi bi-twitter-x fs-4"></i>
              <i className="bi bi-youtube fs-4"></i>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="col-lg-2 col-md-6 col-12 mb-5">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled text-secondary">
              <li className="mb-2">Home</li>
              <li className="mb-2">Collections</li>
              <li className="mb-2">New Arrivals</li>
              <li className="mb-2">Best Sellers</li>
              <li className="mb-2">Offers</li>
            </ul>
          </div>

          {/* CUSTOMER SERVICE */}
          <div className="col-lg-2 col-md-6 col-12 mb-5">
            <h5 className="mb-3">Support</h5>
            <ul className="list-unstyled text-secondary">
              <li className="mb-2">FAQ</li>
              <li className="mb-2">Shipping</li>
              <li className="mb-2">Returns</li>
              <li className="mb-2">Track Order</li>
              <li className="mb-2">Contact Us</li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="col-lg-4 col-md-6 col-12 mb-5">
            <h5 className="mb-3">Newsletter</h5>
            <p className="text-secondary">
              Sign up to receive the latest updates, exclusive discounts,  
              and early access to new collections.
            </p>

            <form className="mt-4">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control py-3"
                  placeholder="Enter your email"
                />
                <span className="input-group-text bg-primary text-white">
                  <i className="bi bi-send-fill fs-5"></i>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="container-fluid bg-dark text-light py-3 border-top border-secondary">
        <div className="row">
          <div className="col text-center">
            <p className="mb-0 text-secondary">
              © {new Date().getFullYear()} All4Home — All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
