import React, { createContext, useState, useEffect } from "react";
import { All_Products, slide } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const url = "https://finalproject-1-s0az.onrender.com";
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // -----------------------
  // SAFE LOCAL STORAGE READ
  // -----------------------
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem("cartItems");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Invalid cartItems in storage:", e);
      localStorage.removeItem("cartItems");
      return [];
    }
  });

  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const saved = localStorage.getItem("wishlistItems");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Invalid wishlistItems in storage:", e);
      localStorage.removeItem("wishlistItems");
      return [];
    }
  });

  // -----------------------
  // SAFE LOCAL STORAGE WRITE
  // -----------------------
  useEffect(() => {
    try {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } catch (err) {
      console.error("Could not save cartItems:", err);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
    } catch (err) {
      console.error("Could not save wishlistItems:", err);
    }
  }, [wishlistItems]);

  // -----------------------
  // CART FUNCTIONS
  // -----------------------
  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id);

      if (exists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Store only necessary data (Prevents QuotaExceededError!)
      return [
        ...prevCart,
        {
          id: product.id,
          name: product.Name,
          price: product.price,
          img: product.img, // only the path
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  const getCartTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // -----------------------
  // WISHLIST FUNCTIONS
  // -----------------------
  const addToWishlist = (product) => {
    setWishlistItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev;

      return [
        ...prev,
        {
          id: product.id,
          name: product.Name,
          price: product.price,
          img: product.img,
        },
      ];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearWishlist = () => {
    setWishlistItems([]);
    localStorage.removeItem("wishlistItems");
  };

  // -----------------------
  // SEARCH FUNCTIONALITY
  // -----------------------
  const [input, setInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const SearchFun = (value) => {
    const key = value.toLowerCase();

    const results = All_Products.filter((a) =>
      a.type?.toLowerCase().includes(key) ||
      a.Name?.toLowerCase().includes(key) ||
      a.categery?.toLowerCase().includes(key) ||
      a.color?.toLowerCase().includes(key)
    );

    setFilteredData(results);
  };

  // -----------------------
  // SLIDER
  // -----------------------
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slide.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // -----------------------
  // SCROLL LISTENER
  // -----------------------
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // -----------------------
  // FORM STATES
  // -----------------------
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // -----------------------
  // REGISTER SUBMIT
  // -----------------------
  const RegisterSubmitFun = async (e) => {
    try {
      e.preventDefault();

      const formData = { firstName, lastName, email, password };

      await axios.post(`${url}/user/add`, formData);

      alert("Registered Successfully!");
      navigate("/Login");
    } catch (err) {
      console.log(
        `Error Name : ${err.name}, Error message : ${err.message}`
      );
    }
  };

  // -----------------------
  // LOGIN SUBMIT
  // -----------------------
  const LoginSubmitFun = async (e) => {
    try {
      e.preventDefault();

      const loginData = {
        email: loginEmail,
        password: loginPassword,
      };

      localStorage.setItem("password", loginPassword);

      await axios.post(`${url}/user/login`, loginData);

      alert("Login successfully!");
      navigate("/Home");
    } catch (err) {
      console.log(
        `Error Name : ${err.name}, Error Message : ${err.message}`
      );
    }
  };

  // -----------------------
  // CONTEXT VALUE
  // -----------------------
  const contextValue = {
    slide,
    currentIndex,
    scrollY,

    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,

    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,

    setInput,
    SearchFun,
    filteredData,

    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    RegisterSubmitFun,

    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
    LoginSubmitFun,
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
