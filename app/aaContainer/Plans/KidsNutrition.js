import React from "react";
import styles from "./styles.module.css";
import Plans from "../../../../components/Plans/Plans";
import PlansButton from "./PlansButton";

const KidsNutrition = () => {
  return (
    <div>
      <div className={styles.main}>
      <div className={styles.KidsbannerImg}></div>
      </div>
      <PlansButton />
      <Plans
        title="Nurturing Healthy Futures: Our Specialized Kids Nutrition Program"
        title1="Introduction"
        Intro_content={`At SEHAT, we believe that every child deserves a strong and healthy start in life. Our Kids Nutrition Program is dedicated to providing parents and caregivers with the tools and knowledge they need to ensure their children grow up happy, strong, and well-nourished.`}
        title3="Our Approach"
        Approach_content={`At SEHAT, we take a holistic approach to children's nutrition. Our program is designed to address the unique dietary needs of growing kids, making it easy for parents to provide balanced and nutritious meals that support their children's development.`}
        title4={`Key Features:`}
        subtitle1={`Customized Nutrition Plans:`}
        subcontent1={`Our Kids Nutrition Program is tailored to meet the specific needs and tastes of your child, ensuring they receive the right nutrients for healthy growth.`}
        subtitle2={`Balanced Meals:`}
        subcontent2={`We emphasize balanced and age-appropriate meals that promote physical and cognitive development.`}
        subtitle3={`Healthy Habits:`}
        subcontent3={`We focus on instilling lifelong healthy eating habits, reducing the risk of childhood obesity and related health issues.`}
        subtitle4={`Picky Eater Solutions:`}
        subcontent4={`We provide strategies to help parents navigate picky eating phases and encourage a variety of foods.`}
        subtitle5={`Parental Guidance:`}
        subcontent5={`We offer parents the knowledge and confidence they need to make informed nutritional choices for their children.`}
        whytitle={`Why Choose Us:`}
        whycontent1={`- Experienced Pediatric Nutritionists: Our team includes experts in children's nutrition and development.`}
        whycontent2={`- Child-Centered Plans: We create nutrition plans that put your child's well-being at the forefront.`}
        whycontent3={`- Positive Outcomes: Our clients report improved growth, health, and overall happiness in their children.`}
        contact={`Contact Us:`}
        contactcontent={`Ready to give your child the gift of a healthy future? Contact us today to schedule a consultation with one of our pediatric nutrition experts. We're here to support you in nurturing your child's health and well-being.`}
      ></Plans>
    </div>
  );
};

export default KidsNutrition;
