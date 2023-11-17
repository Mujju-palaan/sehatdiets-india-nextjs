"use client";
import PricingCard from '../../../component/PricingCard/PricingCard'
import Familypricing from '../../../component/PricingCard/Familypricing';
import Businesspricing from '../../../component/PricingCard/Businesspricing';
import Testimonials from './Testimonials/Testimonials'
import styles from './styles.module.scss'

const PricingPage = () => {
  return (
    <div style={{backgroundColor:'#fff'}}>
      <h2 style={{ padding: "4rem 0 0 0", textAlign: "center" , color:'#50D5B1', fontFamily:'sans-serif'}}>
        Yearly Subscription
      </h2>
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
          title={`Basic Plan`}
          subtitle={`For individual service`}
          price={`5475`}
          content1={`Personalized Nutrition`}
          content2={`Virtual Workouts`}
          content3={`Mental Health`}
          content4={`Grocery delivery`}
          content5={`AI recipe maker`}
          content6={`Expert Support`}
          content7={`Health Tracking`}
          content8={`Shared Wellness`}
          content9={`Employee Well-being`}
          content10={`24/7 Support`}
          content11={`100% refund`}
          link={`https://buy.stripe.com/aEU2bU0vDeoN4h25kA`}
        />
        <Familypricing
          title={`Family Plan`}
          subtitle={`For family services (5 Members)`}
          price={`36500`}
          content1={`Personalized Nutrition`}
          content2={`Virtual Workouts`}
          content3={`Mental Health`}
          content4={`Grocery delivery`}
          content5={`AI recipe maker`}
          content6={`Expert Support`}
          content7={`Health Tracking`}
          content8={`Shared Wellness`}
          content9={`Employee Well-being`}
          content10={`24/7 Support`}
          content11={`100% refund`}
          link={`https://buy.stripe.com/7sI7weemtfsRbJucN3`}
        />
        <Businesspricing
          title={`Corporate Plan`}
          subtitle={`For business service (50 Members)`}
          price={`365000`}
          content1={`Personalized Nutrition`}
          content2={`Virtual Workouts`}
          content3={`Mental Health`}
          content4={`Grocery delivery`}
          content5={`AI recipe maker`}
          content6={`Expert Support`}
          content7={`Health Tracking`}
          content8={`Shared Wellness`}
          content9={`Employee Well-being`}
          content10={`24/7 Support`}
          content11={`100% refund`}
          link={`https://buy.stripe.com/8wMdUCdip6Wl6pa3cu`}
        />
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
