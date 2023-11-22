"use client";
import PricingCard from '../../../component/PricingCard/PricingCard'
import Familypricing from '../../../component/PricingCard/Familypricing';
import Businesspricing from '../../../component/PricingCard/Businesspricing';
import Testimonials from './Testimonials/Testimonials'
import styles from './styles.module.scss'
import Calendar from '../../../component/Calendar/Calendar'


const PricingPage = () => {
  return (
    <div style={{backgroundColor:'#fff'}}>
      <h1 className={styles.yearly} style={{ padding: "4rem 0 0 0", textAlign: "center" , color:'#50D5B1', fontFamily:'sans-serif'}}>
        Yearly Subscription
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
          title={`Individual Plan`}
          subtitle={`24 Weeks`}
          price={`5475`}
          content1={`Personalized Diet Plan`}
          content1_1={`8-Hours Diet Coach Support`}
          content1_2={`24 Dietitian Counsellings`}
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
          subtitle={`52 Weeks (5 Members)`}
          price={`25999`}
          content1={`Personalized Diet Plan`}
          content1_1={`8-Hours Diet Coach Support`}
          content1_2={`52 Dietitian Counsellings`}
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
          link={`https://buy.stripe.com/7sI7weemtfsRbJucN3`}
        />
        <Businesspricing
          title={`Corporate Plan`}
          subtitle={`52 Weeks (50 Members)`}
          price={`365000`}
          content1={`Personalized Diet Plan`}
          content1_1={`8-Hours Diet Coach Support`}
          content1_2={`52 Dietitian Counsellings`}
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
        <Calendar />
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
