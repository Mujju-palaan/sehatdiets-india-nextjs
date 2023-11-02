"use client";
import React from "react";
import styles from "./styles.module.css";
import Plans from "../../../../components/Plans/Plans";
import { useState } from "react";
import PlansButton from "./PlansButton";

const FitnessPerformance = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <div className={styles.main}>
      <div className={styles.FitnessbannerImg}></div>
      </div>
      <PlansButton />
      <Plans
        title="Elevate Your Performance with Our Custom Fitness Programs"
        title1="Introduction"
        Intro_content={`Welcome to SEHAT, where we're dedicated to helping individuals reach their peak physical potential through our tailored Fitness Performance Program. Our team of experienced trainers and fitness experts is committed to guiding you towards superior athletic performance and overall well-being.`}
        title3="Our Approach"
        Approach_content={`At SEHAT, we understand that everyone's fitness journey is unique. Our Fitness Performance Program is designed to be fully personalized, addressing your specific fitness goals, preferences, and abilities. We're here to provide you with the tools and support needed to excel in your athletic endeavors.`}
        title4={`Key Features:`}
        subtitle1={`Personalized Training:`}
        subcontent1={`Our programs are meticulously crafted to match your fitness goals, whether it's strength and conditioning, endurance, agility, or a combination of these.`}
        subtitle2={`Expert Guidance:`}
        subcontent2={`You'll be under the mentorship of certified fitness professionals with a wealth of experience in optimizing athletic performance.`}
        subtitle3={`Custom Nutrition Plans:`}
        subcontent3={`We integrate nutrition strategies into your program to fuel your body for peak performance.`}
        subtitle4={`Goal Tracking:`}
        subcontent4={`We use data-driven methods to monitor your progress and make necessary adjustments to keep you on track.`}
        subtitle5={`Injury Prevention:`}
        subcontent5={`Our programs prioritize injury prevention through smart training techniques and exercises.`}
        whytitle={`Why Choose Us:`}
        whycontent1={`- **Proven Success:** Many of our clients have achieved remarkable improvements in their athletic performance, setting personal records and reaching their fitness milestones`}
        whycontent2={`- **Comprehensive Support:** We offer not only customized training but also guidance on recovery, mental preparation, and more.`}
        whycontent3={`- **State-of-the-Art Facilities:** Our top-notch training facilities are equipped with cutting-edge equipment to optimize your workouts.`}
        contact={`Contact Us:`}
        contactcontent={`Ready to take your athletic performance to new heights? Get in touch with us today to schedule a consultation with one of our fitness experts. We're here to be your partner in achieving your fitness and performance goals.`}
      ></Plans>
    </div>
  );
};

export default FitnessPerformance;
