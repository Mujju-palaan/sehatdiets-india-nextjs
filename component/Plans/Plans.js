'use client'
import React, { useRef, useEffect } from "react";
import styles from "./styles.module.css";
import {motion , AnimatePresence, useInView, useAnimation, useScroll, useTransform } from "framer-motion";


const Plans = (props) => {
  const Animation = {
    initial:{
      x:'-100vw',
      opacity:0
    },
    animate:{
      x:0,
      opacity:1,
      transition:{duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]}

    }
  }

  const YAnimation = {
    initial:{
      y:75,
      opacity:0
    },
    animate:{
      y:0,
      opacity:1,
      transition:{duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]}

    }
  }

  const ref = useRef(null);
  const isInview = useInView(ref, {once: true});
  const  mainControls = useAnimation();

  useEffect(() => {
    if (isInview){
      mainControls.start("animate")
      console.log('animated')
    }
  }, [isInview]);

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["end end", "end start"]
  // }
  // );
  // const x = useTransform(scrollYProgress, [0, 1], [0, -900]);
  // const y = useTransform(scrollYProgress, [0, 1], [0, -900]);
  return (
    <>
    <AnimatePresence mode='wait'>
      <div ref={ref} className={styles.main}>

        <motion.h1 variants={YAnimation} initial="initial" animate={mainControls}
        className={styles.title}>{props.title}</motion.h1>
        <div className={styles.content}>
          <div style={{ paddingBottom: "2rem" }}>
            <motion.h2 variants={YAnimation} initial="initial" animate={mainControls} 
            className={styles.heading}>{props.title1}</motion.h2>
            <motion.p variants={YAnimation} initial="initial" animate={mainControls} 
            className={styles.content}>{props.Intro_content}</motion.p>
          </div>

          <div>
            <motion.h2 variants={YAnimation} initial="initial" animate={mainControls} 
            className={styles.heading}>{props.title3}</motion.h2>
            <motion.p variants={YAnimation} initial="initial" animate={mainControls} 
            className={styles.content}>{props.Approach_content}</motion.p>
          </div>

          <motion.h2 variants={YAnimation} initial="initial" animate={mainControls} 
          className={styles.heading}>{props.title4}</motion.h2>

          <div>
            <motion.h2 variants={YAnimation} initial="initial" animate={mainControls}
            className={styles.mb0}>
              <span className={styles.circle}>1</span>{" "}
              <span className={styles.heading}>{props.subtitle1}</span>
            </motion.h2>
            <motion.p variants={YAnimation} initial="initial" animate={mainControls}
            className={styles.content}>{props.subcontent1}</motion.p>
          </div>

          <motion.h2 variants={YAnimation} initial="initial" animate={mainControls}
          className={styles.mb0}>
            <span className={styles.circle}>2</span>{" "}
            <span className={styles.heading}>{props.subtitle2}</span>
          </motion.h2>
          <motion.p variants={YAnimation} initial="initial" animate={mainControls}
          className={styles.content}>{props.subcontent2}</motion.p>

          <motion.h2 variants={YAnimation} initial="initial" animate={mainControls}
          className={styles.mb0}>
            <span className={styles.circle}>3</span>{" "}
            <span className={styles.heading}>{props.subtitle3}</span>
          </motion.h2>
          <motion.p variants={YAnimation} initial="initial" animate={mainControls}
          className={styles.content}>{props.subcontent3}</motion.p>

          <motion.h2 variants={YAnimation} initial="initial" animate={mainControls}
          className={styles.mb0}>
            <span className={styles.circle}>4</span>{" "}
            <span className={styles.heading}>{props.subtitle4}</span>
          </motion.h2>
          <motion.p variants={YAnimation} initial="initial" animate={mainControls}
          className={styles.content}>{props.subcontent4}</motion.p>

          <motion.h2 variants={YAnimation} initial="initial" animate={mainControls}
          className={styles.mb0}>
            <span className={styles.circle}>5</span>{" "}
            <span className={styles.heading}>{props.subtitle5}</span>
          </motion.h2>
          <motion.p variants={YAnimation} initial="initial" animate={mainControls}
          className={styles.content}>{props.subcontent5}</motion.p>

          <motion.h2 variants={YAnimation} initial="initial" animate={mainControls}
          className={styles.mb0}>
            {/* <span className={styles.circle}>7</span>{" "} */}
            <span className={styles.heading}>{props.whytitle}</span>
          </motion.h2>
          <motion.p variants={YAnimation} initial="initial" animate={mainControls}
          className={styles.content}>{props.whycontent1}</motion.p>
          <motion.p variants={YAnimation} initial="initial" animate={mainControls}
          className={styles.content}>{props.whycontent2}</motion.p>
          <motion.p variants={YAnimation} initial="initial" animate={mainControls}
          className={styles.content}>{props.whycontent3}</motion.p>

          <motion.h2 variants={YAnimation} initial="initial" animate={mainControls}
          className={styles.mb0}>
            <span className={styles.heading}>{props.contact}</span>
          </motion.h2>
          <motion.p variants={YAnimation} initial="initial" animate={mainControls}
          className={styles.content}>{props.contactcontent}</motion.p>
        </div>
      </div>
    </AnimatePresence>
    </>
  );
};

export default Plans;

