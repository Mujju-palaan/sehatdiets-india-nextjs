"use client";
import React from "react";
import styles from "./styles.module.css";
import Plans from "../../../../components/Plans/Plans";
import PlansButton from "./PlansButton";

const WeightLossPrograms = () => {
  return (
    <div>
      <div className={styles.main}>
      <div className={styles.WeightLossbannerImg}></div>
      </div>
      <PlansButton />
      <Plans
        title="Transform Your Life with Our Personalized Weight Loss Program"
        title1="Introduction"
        Intro_content={`Welcome to our Weight Loss Program, where we are committed to helping you achieve your health and wellness
      goals through tailored and effective weight management strategies. Our team of dedicated professionals
       understands that each person's weight loss journey is unique, and we're here to
       provide the guidance and support you need. `}
        title3="Our Approach"
        Approach_content={`At SEHAT , we believe in a holistic approach to weight loss. Our personalized weight loss program 
      is designed to address your specific needs, preferences, and lifestyle, ensuring that you reach 
      and maintain your ideal weight in a healthy and sustainable way.`}
        title4={`Key Features:`}
        subtitle1={`Personalization`}
        subcontent1={`Our weight loss plans are crafted to meet your individual goals, body type, and dietary requirements.`}
        subtitle2={`Balanced Nutrition`}
        subcontent2={`We emphasize balanced and nutritious eating habits, promoting long-term health and well-being.
      ting the Subscribers' path to mental and
        emotional well-being.`}
        subtitle3={`Effective Strategies`}
        subcontent3={`Our program combines scientifically proven techniques, such as calorie control, exercise routines, 
      and behavior modification, to ensure successful weight loss.`}
        subtitle4={`Motivation and Support`}
        subcontent4={`We provide continuous guidance, motivation, and support to keep you on track and motivated throughout your journey.`}
        subtitle5={`Health Benefits`}
        subcontent5={`Achieving a healthy weight can lead to improved overall health, reduced risk of chronic diseases, 
      and increased vitality.`}
        whytitle={`Why Choose Us:`}
        whycontent1={`- Experienced Professionals: Our team includes certified nutritionists, fitness experts, and 
      counselors who are passionate about helping you succeed.`}
        whycontent2={`- Individualized Plans: We tailor our weight loss plans to your unique needs and goals.`}
        whycontent3={`- Proven Results: Our clients have achieved remarkable weight loss results and transformed their lives.`}
        contact={`Contact Us:`}
        contactcontent={`Ready to embark on your weight loss journey? Contact us today to schedule a consultation with one of our experts. 
      We're here to support you on your path to a healthier, happier you.`}
      ></Plans>
    </div>
  );
};

export default WeightLossPrograms;
