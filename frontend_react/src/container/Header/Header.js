import React from "react";
import "./Header.scss";
import { easeInOut, motion } from "framer-motion";
import images from "../../constants/images";
import { AppWrap, MotionWrap } from "../../Wrapper";
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello ,I am</p>
              <h1 className="head-text">BACHIR</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Junior Frontend </p>
            <p className="p-text">Web Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.pict_profil_1} alt="profile_bg" />
        {/* <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: easeInOut }}
          src={images.circle}
          alr="profile_circle"
          className="overlay_circle"
        /> */}
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[
          images.html,
          images.css,
          images.mu5,
          images.javascript,
          images.react,
          images.node,
          images.redux,
          images.python,
          images.git,
          images.api,
        ].map((circle, index) => (
          <div className="circle-cmp app__flex" key={index}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(MotionWrap(Header, "app__header"), "home");
