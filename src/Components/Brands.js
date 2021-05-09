import React from "react";
import "./Carousel.css";

const Brands = ({ url, title }) => {
  return (
    <div className="brand">
      <img src={url} alt={title} className="brand__logo" />
      <h2 className="brand__title">{title}</h2>
    </div>
  );
};

export default Brands;
