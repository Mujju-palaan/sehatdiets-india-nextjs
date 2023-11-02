import styles from './HomePage.module.scss'
import React from "react";
import BannerDivider from './BannerDivider/BannerDivider'
import BMICalculator from '../../../component/BMICalculator/BMICalculator'
import HomePlansCard from '../../../component/planscard/HomePlansCard'
// import SwiperPlan from './Swiper'
// import Partner from '../../aaContainer/HomePage/partner'

const HomePage = () => {
  return (
    <div style={{fontFamily:'fairytale'}}>
    <div className={styles.main}>
      <BannerDivider />

      <div className={styles.main_girl}>  
        {/* <div className={styles.main_girl_right}>
          <h2>Hi !</h2>
          <Girl_saying_Hi /> 
        </div>        */}
        {/* <div className={styles.main_girl_content}>
          <div className={styles.main_girl_content_c1} >
            <h1>Your Ultimate well-beign at Just ₹10 per/Day</h1>
            <p> In today's fast-paced world, SEHATm Nutrition isn't just a wellness platform, it's your gateway
              to an extraordinary life, available at an incredible rate of just ₹10 pre day, Seamlessly blending
              personalized nutrition, cutting-edge technology and unwavering support, we empower you to
              take charge of your well-being and transform it into a fulfilling lifestyle.
            </p>         
          </div>
          
        </div> */}
      </div> 
    </div>

    <div className={styles.extraheight} style={{textAlign:'center'}}>
      <h1>
        "Nutrition Tailored Just for You"</h1>
      <p style={{fontFamily:'Pangeatext,sans-serif',color:'rgba(0,0,0,.5)',paddingBottom:'4rem'}}> 
      In today's fast-paced world, SEHAT Nutrition isn't just a wellness platform, it's your gateway
              to an extraordinary life, available at an incredible rate of just ₹10 pre day, Seamlessly blending
              personalized nutrition, cutting-edge technology and unwavering support, we empower you to
              take charge of your well-being and transform it into a fulfilling lifestyle.
            </p> 
    </div>
    

   
    {/* <Partner></Partner> */}
    <div>
      {/* <SwiperPlan></SwiperPlan> */}
    </div>

      <section className={styles.section} style={{fontFamily:'sans-serif'}}>
        <h1 style={{textAlign:'center', color:'#50D5B1 '}}>How it Works</h1>
        <section1>         
          <div className={styles.box1}>
            <div className={styles.box1_img}>
              <img src='./AdobeStock_588971224_Preview.png'></img>
            </div>
            
            <div className={styles.box1_content}>
              <h1>
              <span1>1</span1>{" "}
              <span2 style={{color:'#50D5B1 '}}>Preamble :</span2>
              </h1>
              <p>Begin by selecting thw wellness plan that aligns with your goals 
                -individuals, Family or Corporate.
              </p>
            </div>
          </div>
        </section1>

        <section2>         
          <div className={styles.box1}>
                     
            <div className={styles.box1_content}>
              <h1>
                <span1>2</span1>{" "}
                <span2 style={{color:'#50D5B1 '}}>Complete Your Payment:</span2>
              </h1>
              <p>Safely and swiftly make your payment. And don't forget, we offer a 
                1-month, 100% refund policy for your peace of mind.
              </p>
            </div>

            <div className={styles.box1_img}>
              <img src='./payment.png'></img>
            </div>
          </div>
        </section2>

        <section3>         
          <div className={styles.box1}>
            <div className={styles.box1_img}>
              <img src='./call.png'></img>
            </div>
            <div className={styles.box1_content}>
              <h1>
                <span1>3</span1>{" "}
                <span2 style={{color:'#50D5B1 '}}>Welcome Call :</span2>
              </h1>
              <p>Expect a call from our dedicated dieticican, whon will guide you towards 
                a personalized well-being journey.
              </p>
            </div>
          </div>
        </section3>

        <section4>         
          <div className={styles.box1}>
            <div className={styles.box1_content} >
              <h1>
                <span1>4</span1>{" "}
                <span2 style={{color:'#50D5B1 '}}>Start Your Wellness Journey :</span2>
              </h1>
              <p>With a plan in place, embark your transformative journey to healthier, happier you,
                supported by our expert guidance and our 1-month, 100% refund policy.
              </p>
            </div>
            <div className={styles.box1_img}>
              <img src='./journey.png'></img>
            </div>
          </div>
        </section4>
      </section>

      {/* <section className={styles.journey}>
        <main >
          <h1>Personalized Nutrition Plan</h1>
          <h1>"Nutrition Tailored Just for You"</h1>
        </main>

        <div className={styles.box1}>
            <div className={styles.box1_content}>
              <h2>Start Your Wellness Journey :</h2>
              <p>With a plan in place, embark your transformative journey to healthier, happier you,
                supported by our expert guidance and our 1-month, 100% refund policy.
              </p>
            </div>
            <div className={styles.box1_img}>
              <img src='/AdobeStock_588971224_Preview.png' height={500} width={500}></img>
            </div>
          </div>
      </section> */}
      <BMICalculator></BMICalculator>

      {/* <section className={styles.Testimonials}>
        <h1 style={{color:'#50D5B1', fontFamily:'sans-serif,Pangeatext'}}>We Never Stop Smiling !</h1>
        <p style={{color:'gray',fontFamily:'sans-serif,Pangeatext'}}>
          Hi and nice to meet you! This isour brave team. We work very hard to provide an awesome experience for you.
        </p>
        
        <div style={{display:'flex'}}>
        <TeamMembers></TeamMembers>
        </div>
        
        <Testimonials></Testimonials>
      </section> */}

      
      


    </div>
  );
};

export default HomePage;
