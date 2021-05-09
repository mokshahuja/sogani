import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <div>
      <motion.div
        initial={{ y: -300 }}
        animate={{ y: 0 }}
        transition={{ type: "Tween", stiffness: 100, duration: 0.8 }}
        size={150}
        radius={30}
        className="About"
      >
        <h1 style={{ alignSelf: "center", fontFamily: "fantasy" }}>
          SOGANI EYE WORLD
        </h1>

        <h2
          style={{
            margin: "1rem",
            textAlign: "left",
            fontFamily: "-moz-initial",
          }}
        >
          We are a Brand-New Store that delivers the demand of the present. With
          a wide range of options and new cutting-edge technology ,we do our
          best to meet the desire of our cutomers. spectacles are also known as
          specs. the peoples whose eyes has started defecting,they wear it.yes
          everyone who wear it their eyes are not defected .most of them wear it
          for preventing dust entering the eyes.
        </h2>
        <p style={{ margin: "1rem", textAlign: "left", fontFamily: "cursive" }}>
          The structure of our eye is such that we can see clearly only if the
          lens within our eye bends light to a correct angle so that a clear
          image is formed on the retina. Persons may suffer from long
          sightedness, in which the light gets focused behind the retina, or
          short sightedness in which light gets focus before it reaches the
          retina. To correct this condition and allow normal vision, we visit an
          Eye specialist, he checks our vision by asking-us to read the alphabet
          or symbols on the wall and prescribes lenses of the correct thickness
          for correcting this problem. With the prescription we visit an
          ‘Optician’. An optician is a person who makes the correct spectacles
          based on the doctor’s advice and even tests our eyes for correcting
          vision. He would generally ask us to select an appropriate frame for
          our spectacles and then fit it out with the correct lenses. We would
          wear the glasses for a few days and check their appropriateness, in
          case any alteration is required. If vision is still not corrected then
          another visit to the optician may be required.
        </p>
      </motion.div>
      <motion.div />
    </div>
  );
};

export default About;
