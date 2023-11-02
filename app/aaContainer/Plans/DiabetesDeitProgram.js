import React from "react";
import styles from "./styles.module.css";
import Plans from "../../../../components/Plans/Plans";
import PlansButton from "./PlansButton";

const DiabetesDeitProgram = () => {
  return (
    <div>
      <div className={styles.main}>
      <div className={styles.DiabetesbannerImg}></div>
      </div>
      <PlansButton />
      <Plans
        title="Expertly Crafted Diabetes Diet Plans for Optimal Health"
        title1="Introduction:"
        Intro_content={`Welcome to our Diabetes Diet Service, where we are dedicated to empowering individuals with diabetes to lead healthier, more fulfilling lives through tailored nutrition solutions. Our team of experienced dietitians and nutritionists understands the unique dietary requirements of diabetes management, and we're here to guide you every step of the way. `}
        title3="Our Approach"
        Approach_content={`At SEHAT , we believe that managing diabetes doesn't mean sacrificing delicious food or compromising on nutrition. Our approach is centered on creating personalized diabetes diet plans that are not only effective but also enjoyable. We work closely with each client to understand their specific needs, preferences, and lifestyle, ensuring that our plans are practical and sustainable.`}
        title4={`Key Features:`}
        subtitle1={`Personalization`}
        subcontent1={`Our diet plans are meticulously customized to meet your individual health goals and diabetes management needs.`}
        subtitle2={`Balanced Nutrition`}
        subcontent2={`We focus on a balanced and nutritious diet, emphasizing whole foods, fiber-rich choices, and portion control.`}
        subtitle3={`Blood Sugar Control:`}
        subcontent3={`Our plans are designed to help stabilize blood sugar levels, reducing the risk of complications.`}
        subtitle4={`Delicious Meals:`}
        subcontent4={`We believe that healthy eating can be delicious. Our recipes are both nutritious and flavorful, making it easier to stick to your diet.`}
        subtitle5={`Continuous Support:`}
        subcontent5={`Our team provides ongoing support and guidance to ensure your success on your diabetes management journey.`}
        whytitle={`Why Choose Us:`}
        whycontent1={`- Experienced Professionals: Our team consists of certified dietitians and nutritionists with a deep understanding of diabetes nutrition.`}
        whycontent2={`- Client-Centered Approach: We prioritize your needs and preferences to create a plan that works for you.`}
        whycontent3={`- Proven Results: Our clients have achieved significant improvements in their diabetes management and overall well-being.`}
        contact={`Contact Us:`}
        contactcontent={`Ready to take control of your diabetes and improve your overall health? Contact us today to schedule a consultation with one of our diabetes diet experts. We're here to support you on your path to a healthier and more fulfilling life.`}
      ></Plans>
    </div>
  );
};

export default DiabetesDeitProgram;
