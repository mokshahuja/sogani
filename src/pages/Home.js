import React, { useEffect } from "react";
import "../App.css";
import DemoCarousel from "../Components/Carousel";
import arr from "../utils/brands";
import frames from "../utils/frames";
import Brands from "../Components/Brands";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function FadeInWhenVisible({ children, vare }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 1, type: "spring" }}
      variants={vare}
    >
      {children}
    </motion.div>
  );
}

const BrandsArray = () => {
  return (
    <div className="brandsGrid">
      {arr.map(({ url, brand }) => (
        <Brands title={brand} url={url} />
      ))}
    </div>
  );
};

const Home = () => {
  return (
    <div className="App">
      <div>
        <DemoCarousel />

        <div className="brandGrid__Section">
          <p>ALL BRANDS AVAILABLE</p>
        </div>
        <FadeInWhenVisible
          vare={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0.5, scale: 0.5 },
          }}
        >
          <BrandsArray />
        </FadeInWhenVisible>

        <div className="brandGrid__Section">
          <p>CHOOSE FROM VARIOUS FRAMES</p>
        </div>

        <FadeInWhenVisible
          vare={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0.5, scale: 0.5 },
          }}
        >
          <div className="brandsGrid">
            {frames.map(({ url, type }) => (
              <Brands title={type} url={url} />
            ))}
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
};

export default Home;
