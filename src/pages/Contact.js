import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const Contact = () => {
  return (
    <div className="contactDiv">
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100, duration: 0.8 }}
        size={150}
        radius={30}
        className="Contact"
      >
        <h2>Phone No.</h2>
        <h4>
          <a href="tel:8619918798">+91-8619918798</a>{" "}
        </h4>
        <h4>
          <a href="tel:6378110830">+91-6378110830</a>{" "}
        </h4>
      </motion.div>
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100, duration: 0.8 }}
        size={150}
        radius={30}
        className="Contact"
      >
        <h2>Email Us</h2>
        <h4>
          <a href="mailto:prashant22jain@gmail.com">prashant22jain@gmail.com</a>
        </h4>
      </motion.div>
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100, duration: 0.8 }}
        size={150}
        radius={30}
        className="Contact"
        style={{ minWidth: "min-content" }}
      >
        <h2>Visit us at</h2>
        <h4 style={{ margin: "1rem", color: "#0525a3" }}>
          <p style={{ marginBottom: "0.5rem" }}>
            Opp. Central Bank of India, Jay Ambay Nagar,
          </p>
          <p>Near Gopalpura Flyover,main Tonk Road, Jaipur</p>
        </h4>
      </motion.div>
    </div>
  );
};

export default Contact;
