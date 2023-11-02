"use client"
import React, { useEffect, useState } from "react";
import { motion, useTransform } from "framer-motion";
import styles from "./styles.module.css";
import Plans from "../../../../components/Plans/Plans";
import PlansButton from "./PlansButton";

    const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
    const firstName = {
    initial: {
        y: 0,
    },
    animate: {
        y: 0,
        transition: {
        delayChildren: 0.6,
        staggerChildren: 0.04,
        staggerDirection: -1,
        },
    },
    };

    const lastName = {
    initial: {
        y: 0,
    },
    animate: {
        y: 0,
        transition: {
        delayChildren: 0.6,
        staggerChildren: 0.04,
        staggerDirection: 1,
        },
    },
    };

    const letter = {
    initial: {
        y: 400,
    },
    animate: {
        y: 0,
        transition: { duration: 1, ...transition },
    },
    };


const Test = () => {

    // const { scrollYProgress } = useViewportScroll();
    // const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

    // const [canScroll, setCanScroll] = useState(false);

    // useEffect(() => {
    //     if (canScroll === false) {
    //     document.querySelector("body").classList.add("no-scroll");
    //     } else {
    //     document.querySelector("body").classList.remove("no-scroll");
    //     }
    // }, [canScroll]);

  return (
    <div>
      <motion.div className='model' style={{fontSize:'6rem'}}>
              <motion.span className='first' variants={firstName} initial="initial" animate="animate">
                <motion.span variants={letter} initial="initial" animate="animate">W</motion.span>
                <motion.span variants={letter} initial="initial" animate="animate">e</motion.span>
                <motion.span variants={letter} initial="initial" animate="animate">i</motion.span>
                <motion.span variants={letter} initial="initial" animate="animate">g</motion.span>
                <motion.span variants={letter} initial="initial" animate="animate">h</motion.span>
                <motion.span variants={letter} initial="initial" animate="animate">t</motion.span>
              </motion.span>
              <motion.span className='last' variants={lastName}>
                <motion.span variants={letter} initial="initial" animate="animate">L</motion.span>
                <motion.span variants={letter} initial="initial" animate="animate">o</motion.span>
                <motion.span variants={letter} initial="initial" animate="animate">s</motion.span>
                <motion.span variants={letter} initial="initial" animate="animate">s</motion.span>
              </motion.span>
          </motion.div>
      <div className={styles.WeightLossbannerImg}></div>
      <PlansButton />
      <Plans
        title="Transform Your Life with Our Personalized Weight Loss Program"
        title1="Introduction"
    //     Intro_content={`Welcome to our Weight Loss Program, where we are committed to helping you achieve your health and wellness
    //   goals through tailored and effective weight management strategies. Our team of dedicated professionals
    //    understands that each person's weight loss journey is unique, and we're here to
    //    provide the guidance and support you need. `}
    //     title3="Our Approach"
    //     Approach_content={`At SEHAT , we believe in a holistic approach to weight loss. Our personalized weight loss program 
    //   is designed to address your specific needs, preferences, and lifestyle, ensuring that you reach 
    //   and maintain your ideal weight in a healthy and sustainable way.`}
    //     title4={`Key Features:`}
    //     subtitle1={`Personalization`}
    //     subcontent1={`Our weight loss plans are crafted to meet your individual goals, body type, and dietary requirements.`}
    //     subtitle2={`Balanced Nutrition`}
    //     subcontent2={`We emphasize balanced and nutritious eating habits, promoting long-term health and well-being.
    //   ting the Subscribers' path to mental and
    //     emotional well-being.`}
    //     subtitle3={`Effective Strategies`}
    //     subcontent3={`Our program combines scientifically proven techniques, such as calorie control, exercise routines, 
    //   and behavior modification, to ensure successful weight loss.`}
    //     subtitle4={`Motivation and Support`}
    //     subcontent4={`We provide continuous guidance, motivation, and support to keep you on track and motivated throughout your journey.`}
    //     subtitle5={`Health Benefits`}
    //     subcontent5={`Achieving a healthy weight can lead to improved overall health, reduced risk of chronic diseases, 
    //   and increased vitality.`}
    //     whytitle={`Why Choose Us:`}
    //     whycontent1={`- Experienced Professionals: Our team includes certified nutritionists, fitness experts, and 
    //   counselors who are passionate about helping you succeed.`}
    //     whycontent2={`- Individualized Plans: We tailor our weight loss plans to your unique needs and goals.`}
    //     whycontent3={`- Proven Results: Our clients have achieved remarkable weight loss results and transformed their lives.`}
    //     contact={`Contact Us:`}
    //     contactcontent={`Ready to embark on your weight loss journey? Contact us today to schedule a consultation with one of our experts. 
    //   We're here to support you on your path to a healthier, happier you.`}
      ></Plans>
    </div>
  );
};

export default Test;
