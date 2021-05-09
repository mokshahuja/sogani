import React, { Component } from "react";
import "./Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../static/images/dmitry-ratushny-wpi3sDUrSEk-unsplash.jpg";
import img2 from "../static/images/isabella-and-zsa-fischer-LXDFEdtEGUQ-unsplash.jpg";
import img3 from "../static/images/jake-young-iR3dtvKmwAw-unsplash.jpg";
import img4 from "../static/images/joshua-newton-g4_IymCiD-k-unsplash.jpg";

export default class DemoCarousel extends Component {
  render() {
    return (
      <div className="Corousel__container">
        <Carousel
          autoPlay
          infiniteLoop
          showArrows
          showThumbs={false}
          width="100%"
        >
          <div>
            <img src={img1} alt="test" />
          </div>
          <div>
            <img src={img2} alt="test" />
          </div>
          <div>
            <img src={img3} alt="test" />
          </div>
          <div>
            <img src={img4} alt="test" />
          </div>
        </Carousel>
      </div>
    );
  }
}
