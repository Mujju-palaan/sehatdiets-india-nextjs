import React from "react";
import Plans from "../../../../components/Plans/Plans";
import styles from "./styles.module.css";
// import img from './images/Plans_weddingBanner2.jpeg'
import PlansButton from "./PlansButton";

const WeddingDeitProgram = () => {
  return (
    <div>
      <div className={styles.main}>
      <div className={styles.WeddingbannerImg}></div>
      </div>
      <PlansButton />
      <Plans
        title="Achieve Your Dream Wedding Look with Our Specialized Wedding Diet Program"
        title1="Introduction:"
        Intro_content={`Congratulations on your upcoming wedding! At SEHAT, we understand the desire to look and feel your absolute best on your special day. Our Wedding Diet Program is tailored to help brides and grooms-to-be achieve their dream wedding look through a personalized and effective nutrition and fitness plan.`}
        title3={`OurApproach:`}
        Approach_content={`At SEHAT , we believe that preparing for your wedding should be a joyful and stress-free experience. Our program is designed to help you reach your wedding day goals in a healthy and sustainable way, ensuring you look and feel your best as you say "I do."`}
        title4={`Key Features:`}
        subtitle1={`Personalized Plans:`}
        subcontent1={`Our Wedding Diet Program is completely customized to your specific goals, body type, and timeline.`}
        subtitle2={`Nutrition Excellence:`}
        subcontent2={`We provide expert guidance on a balanced and nutritious diet to help you shed unwanted pounds and improve your overall well-being.`}
        subtitle3={`Fitness Routine:`}
        subcontent3={`Our program includes a tailored fitness plan that maximizes results and enhances your energy levels.`}
        subtitle4={`Stress Management:`}
        subcontent4={`Pre-wedding stress can be overwhelming. We offer strategies to manage stress and maintain a positive mindset throughout the planning process.`}
        subtitle5={`Supportive Community:`}
        subcontent5={`Join a community of brides and grooms-to-be for motivation and encouragement on your journey to a stunning wedding day look.`}
        whytitle={`Why Choose Us:`}
        whycontent1={`- Experienced Wedding Nutritionists and Trainers: Our team includes experts with a deep understanding of wedding diet and fitness needs.`}
        whycontent2={`- Results-Oriented Plans: We focus on delivering visible results that help you feel confident and radiant on your wedding day.`}
        whycontent3={`- Stress-Free Preparation: We're here to ensure that your pre-wedding journey is as smooth and enjoyable as possible.`}
        contact={`Contact Us:`}
        contactcontent={`Ready to shine on your wedding day? Contact us today to schedule a consultation with one of our wedding nutrition and fitness experts. We're here to support you as you prepare to step into your new life together.`}
      ></Plans>
    </div>
  );
};

export default WeddingDeitProgram;
