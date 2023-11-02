import React from "react";
import Plans from "../../../../components/Plans/Plans";
import styles from "./styles.module.css";
import PlansButton from "./PlansButton";

const MenopauseDeitProgram = () => {
  return (
    <div>
      <div className={styles.main}>
      <div className={styles.MonopausebannerImg}></div>
      </div>
      <PlansButton />
      <Plans
        title="Embrace Menopause with Vitality: Our Personalized Menopause Diet Program"
        title1="Introduction"
        Intro_content={`Menopause is a transformative phase in a woman's life, and at SEHAT, we understand the importance of embracing it with vitality and grace. Our Menopause Diet Program is designed to provide women with the guidance and support they need to navigate this significant life transition while optimizing their health and well-being.`}
        title3="Our Approach"
        Approach_content={`At SEHAT , we believe that menopause should be a time of empowerment and renewal. Our program is tailored to address the unique nutritional needs and hormonal changes that accompany menopause, helping you feel your best during this stage of life.`}
        title4={`Key Features:`}
        subtitle1={`Personalized Plans:`}
        subcontent1={`Our Menopause Diet Program is entirely customized to your individual needs, addressing specific symptoms and goals.`}
        subtitle2={`Hormonal Balance:`}
        subcontent2={`We focus on achieving and maintaining hormonal balance through nutrition, lifestyle adjustments, and supplementation.`}
        subtitle3={`Bone Health:`}
        subcontent3={`We offer expert guidance on maintaining strong and healthy bones, addressing concerns related to osteoporosis and bone density.`}
        subtitle4={`Heart Health:`}
        subcontent4={`Our program emphasizes heart-healthy nutrition to reduce the risk of cardiovascular issues often associated with menopause.`}
        subtitle5={`Emotional Well-Being:`}
        subcontent5={`Menopause can bring emotional changes. We provide strategies to manage mood swings, anxiety, and stress.`}
        whytitle={`Why Choose Us:`}
        whycontent1={`- Experienced Menopause Nutritionists: Our team includes experts in menopause nutrition and hormonal health.`}
        whycontent2={`- Customized Solutions: We create personalized plans tailored to your unique menopause experience.`}
        whycontent3={`- Enhanced Quality of Life: Our clients report improved vitality, energy, and overall well-being as they embrace menopause.`}
        contact={`Contact Us:`}
        contactcontent={`Ready to embark on a journey of vitality during menopause? Contact us today to schedule a consultation with one of our menopause nutrition experts. We're here to support you as you embrace this new chapter in your life with confidence and health.`}
      ></Plans>
    </div>
  );
};

export default MenopauseDeitProgram;
