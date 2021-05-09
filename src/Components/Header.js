import React from "react";
import "./Carousel.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header__logo">
        <h1>Sogani</h1>
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <VisibilityIcon
            style={{
              fontSize: "40",
              marginLeft: "0.5rem",
              marginRight: "0.5rem",
            }}
          />
        </motion.div>

        <h1>World</h1>
      </Link>
      <div className="header__Info">
        <Link to="/About" style={{ textDecoration: "none", color: "#000" }}>
          <h5>About Us</h5>
        </Link>
        <Link to="/Contact" style={{ textDecoration: "none", color: "#000" }}>
          <h5>Contact us</h5>
        </Link>
      </div>
    </div>
  );
};

export default Header;
