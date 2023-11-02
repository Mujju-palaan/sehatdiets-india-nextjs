import React from "react";
import styles from "./styles.module.css";
import Plans from "../../../../components/Plans/Plans";
import PlansButton from "./PlansButton";

const WeightGainPrograms = () => {
  return (
    <div>
      <div className={styles.main}>
      <div className={styles.WeightGainbannerImg}></div>
      </div>
      <PlansButton />
      <Plans
        title="Achieve Healthy Weight Gain with Our Personalized Program"
        title1="Introduction"
        Intro_content={`Welcome to our Weight Gain Program, where we are dedicated to assisting individuals in achieving their goals for healthy weight gain through personalised and effective strategies. Our team of experts understands that gaining weight can be as challenging as losing it, and we're here to provide the guidance and support you need on your journey.`}
        title3="Our Approach"
        Approach_content={`At SEHAT, we believe that healthy weight gain is about more than just increasing calories. Our personalised weight gain program is designed to address your specific needs, preferences, and health considerations, ensuring that you reach and maintain a healthy weight in a sustainable manner.`}
        title4={`Key Features:`}
        subtitle1={`Personalization:`}
        subcontent1={`Our weight gain plans are tailored to your individual goals, body type, and dietary requirements.`}
        subtitle2={`Balanced Nutrition`}
        subcontent2={`We emphasise balanced and nutrient-dense eating habits to promote muscle growth and overall health.`}
        subtitle3={`Effective Strategies`}
        subcontent3={`Our program combines science-based approaches, including calorie surplus, strength training, and dietary guidance, to ensure successful weight gain.`}
        subtitle4={`Supportive Environment:`}
        subcontent4={`We provide continuous guidance, motivation, and support to help you achieve your weight gain goals.`}
        subtitle5={`Health Benefits`}
        subcontent5={`Gaining weight in a healthy way can lead to increased strength, improved energy levels, and enhanced overall well-being.`}
        whytitle={`Why Choose Us:`}
        whycontent1={`- Experienced Professionals: Our team includes certified nutritionists, fitness trainers, and health coaches with expertise in healthy weight gain.`}
        whycontent2={`- Individualised Plans: We customise our weight gain plans to fit your unique needs and goals.`}
        whycontent3={`- Proven Success: Our clients have achieved substantial weight gain and transformed their lives.`}
        contact={`Contact Us:`}
        contactcontent={`Ready to start your journey to a healthier weight? Contact us today to schedule a consultation with one of our experts. We're here to support you every step of the way towards a healthier, more confident you.`}
      ></Plans>
    </div>
  );
};

export default WeightGainPrograms;
