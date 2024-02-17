"use client";
import PricingCard from '../../../component/PricingCard/PricingCard'
import Familypricing from '../../../component/PricingCard/Familypricing';
import Businesspricing from '../../../component/PricingCard/Businesspricing';
import Testimonials from './Testimonials/Testimonials'
import styles from './styles.module.scss'
import Calendar from '../../../component/Calendar/Calendar'
import IndividualPlan from '../../../component/PricingCard/IndividualPlan'


const PricingPage = () => {
  return (
    <div style={{backgroundColor:'#fff'}}>
      <h1 className={styles.yearly} 
      style={{ padding: "4rem 0 0 0", textAlign: "center" , color:'#50D5B1', fontFamily:'sans-serif'}}>
        Subscriptions Plans
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "4rem",
          padding: "6rem 0 4rem 0",
        }}
      >
        
        <PricingCard
          title={`8 Weeks Plan`}
          // subtitle={`8 Weeks`}
          price={`4999`}
          content1={`Personalized Diet Plan`}
          content1_1={`8hrs Dietitian Support`}
          content1_2={`24 Dietitian Counsellings`}
          content1_3={`Free maintenance plan`}
          content2={`Workout Templates`}
          content3={`Mental Health Support`}          
          content4={`Grocery delivery`}
          content5={`AI recipe maker`}
          content6={`Expert Support`}
          content7={`Health Tracking`}
          content8={`Shared Wellness`}
          content9={`Employee Well-being`}
          content10={`24/7 Customer Support`}
          content11={`100% refund`}
          link={`https://buy.stripe.com/aEU2bU0vDeoN4h25kA`}
        />
        <PricingCard
          title={`16 Weeks Plan`}
          // subtitle={`16 Weeks`}
          price={`8999`}
          content1={`Personalized Diet Plan`}
          content1_1={`8hrs Dietitian Support`}
          content1_2={`24 Dietitian Counsellings`}
          content1_3={`Free maintenance plan`}
          content2={`Workout Templates`}
          content3={`Mental Health Support`}          
          content4={`Grocery delivery`}
          content5={`AI recipe maker`}
          content6={`Expert Support`}
          content7={`Health Tracking`}
          content8={`Shared Wellness`}
          content9={`Employee Well-being`}
          content10={`24/7 Customer Support`}
          content11={`100% refund`}
          link={`https://buy.stripe.com/aEU2bU0vDeoN4h25kA`}
        />
        <PricingCard
          title={`25 Weeks Plan`}
          // subtitle={`25 Weeks`}
          price={`13999`}
          content1={`Personalized Diet Plan`}
          content1_1={`8hrs Dietitian Support`}
          content1_2={`24 Dietitian Counsellings`}
          content1_3={`Free maintenance plan`}
          content2={`Workout Templates`}
          content3={`Mental Health Support`}          
          content4={`Grocery delivery`}
          content5={`AI recipe maker`}
          content6={`Expert Support`}
          content7={`Health Tracking`}
          content8={`Shared Wellness`}
          content9={`Employee Well-being`}
          content10={`24/7 Customer Support`}
          content11={`100% refund`}
          link={`https://buy.stripe.com/aEU2bU0vDeoN4h25kA`}
        />
        <IndividualPlan
          title={`Individual Plan`}
          subtitle={`(52 Weeks)`}
          price={`24999`}
          content1={`Personalized Diet Plan`}
          content1_1={`8hrs Dietitian Support`}
          content1_2={`24 Dietitian Counsellings`}
          content1_3={`Free maintenance plan`}
          content2={`Workout Templates`}
          content3={`Mental Health Support`}          
          content4={`Grocery delivery`}
          content5={`AI recipe maker`}
          content6={`Expert Support`}
          content7={`Health Tracking`}
          content8={`Shared Wellness`}
          content9={`Employee Well-being`}
          content10={`24/7 Customer Support`}
          content11={`100% refund`}
          link={`https://buy.stripe.com/aEU2bU0vDeoN4h25kA`}
        />
        <Familypricing
          title={`Family Plan`}
          subtitle={`(5 Members)`}
          price={`36500`}
          content1={`Personalized Diet Plan`}
          content1_1={`8hrs Dietitian Support`}
          content1_2={`52 Dietitian Counsellings`}
          content1_3={`Free maintenance plan`}
          content2={`Workout Templates`}
          content3={`Mental Health Support`}
          content4={`Grocery delivery`}
          content5={`AI recipe maker`}
          content6={`Expert Support`}
          content7={`Health Tracking`}
          content8={`Shared Wellness`}
          content9={`Employee Well-being`}
          content10={`24/7 Customer Support`}
          content11={`100% refund`}
          link={`https://buy.stripe.com/fZe03MguB6WlbJu00k`}
        />
        <Businesspricing
          title={`Corporate Plan`}
          subtitle={`(50 Members)`}
          price={`Contact our team`}
          content1={`Personalized Diet Plan`}
          content1_1={`8hrs Dietitian Support`}
          content1_2={`52 Dietitian Counsellings`}
          content1_3={`Free maintenance plan`}
          content2={`Workout Templates`}
          content3={`Mental Health Support`}         
          content4={`Grocery delivery`}
          content5={`AI recipe maker`}
          content6={`Expert Support`}
          content7={`Health Tracking`}
          content8={`Shared Wellness`}
          content9={`Employee Well-being`}
          content10={`24/7 Customer Support`}
          content11={`100% refund`}
          link={`https://buy.stripe.com/8wMdUCdip6Wl6pa3cu`}
        />
      </div>

      <div>
        {/* <Calendar /> */}
      </div>
      {/* <div className={styles.contact_section}>
      <h2>Details</h2>
      <BillingForm />
      </div> */}

      {/* <div style={{textAlign:'center', justifyContent:'center', justifyItems:'center', flexDirection:'column',display:'flex'}}>
      
      </div>
      <CC /> */}
      {/* <section className={styles.Testimonials}>
        <h1 style={{color:'#50D5B1', fontFamily:'sans-serif,Pangeatext'}}>We Never Stop Smiling !</h1>
        <p style={{color:'gray',fontFamily:'sans-serif,Pangeatext'}}>
          Hi and nice to meet you! This isour brave team. We work very hard to provide an awesome experience for you.
        </p>
        
        <Testimonials></Testimonials>
      </section> */}

    </div>
  );
};

export default PricingPage;
