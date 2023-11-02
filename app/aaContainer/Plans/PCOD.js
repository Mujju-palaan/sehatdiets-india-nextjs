import React from "react";
import styles from "./styles.module.css";
import Plans from "../../../../components/Plans/Plans";
import PlansButton from "./PlansButton";

const PCOD = () => {
  return (
    <div>
      <div className={styles.main}>
      <div className={styles.PCODbannerImg}></div>
      </div>
      <PlansButton />
      <Plans
        title="Empowering Women with Our Comprehensive PCOD/PCOS Management Program"
        title1="Introduction"
        Intro_content={`Welcome to our PCOD/PCOS Management Program, where we are dedicated to providing women with the support and strategies they need to effectively manage Polycystic Ovary Syndrome (PCOS). Our team of experts understands the unique challenges that PCOS presents, and we're here to guide you towards a healthier, happier life.`}
        title3="Our Approach"
        Approach_content={`At SEHAT , we believe in a holistic approach to PCOD/PCOS management. Our personalized program is designed to address your specific symptoms, hormonal imbalances, and lifestyle factors, ensuring that you can regain control of your health and well-being.`}
        title4={`Key Features:`}
        subtitle1={`Personalization:`}
        subcontent1={`Our PCOD/PCOS management plans are tailored to your individual symptoms, goals, and medical history.`}
        subtitle2={`Hormonal Balance:`}
        subcontent2={`We focus on restoring hormonal balance through nutrition, exercise, and lifestyle adjustments.`}
        subtitle3={`Nutrition and Diet:`}
        subcontent3={`Our program emphasizes a balanced and nutrient-rich diet that can help alleviate PCOS symptoms and improve fertility.`}
        subtitle4={`Exercise and Fitness:`}
        subcontent4={`We provide guidance on exercise routines that support hormonal regulation and overall health.`}
        subtitle5={`Emotional Support:`}
        subcontent5={`PCOS can affect mental health too. We offer emotional support and strategies to manage stress and anxiety.`}
        whytitle={`Why Choose Us:`}
        whycontent1={`- Experienced Specialists: Our team includes gynecologists, nutritionists, fitness experts, and mental health professionals specializing in PCOD/PCOS management.`}
        whycontent2={`- Individualized Plans: We create personalized plans tailored to your specific PCOD/PCOS profile and goals.`}
        whycontent3={`- Proven Results: Our clients have experienced significant improvements in their PCOD/PCOS symptoms and overall quality of life.`}
        contact={`Contact Us:`}
        contactcontent={`Ready to take control of your PCOD/PCOS and embark on your journey to better health? Contact us today to schedule a consultation with one of our experts. We're here to support you on your path to hormonal balance and well-being.`}
      ></Plans>
    </div>
  );
};

export default PCOD;
