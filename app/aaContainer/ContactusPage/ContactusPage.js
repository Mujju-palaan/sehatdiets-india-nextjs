import { color } from 'framer-motion';
import ContactCard from '../../../component/Contact/ContactCard'
import ContactForm from '../../../component/Contact/ContactForm'
import styles from "./Contact.module.css";
import Email from './Email'

const ContactusPage = () => {
  return (
    <div style={{backgroundColor:'#fff'}}>
      <div style={{textAlign:'center'}}><Email></Email></div>
      
      <div className={styles.container}>
        {/* <h1 style={{color:'#50D5B1'}}>Contact Us</h1> */}
        
        <ContactCard />

        {/* <section className={styles.contact_section}>
          <h2>
            We'd love to hear <span> from you </span>
          </h2>

          <ContactForm />
        </section> */}
      </div>
      {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2547158278226!2d73.91419611127971!3d18.562551782466336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1681696533582!5m2!1sen!2sin"
                width={100} height={450} style={{border: 0}} allowFullScreen="" loading="lazy" className={styles.mapping}
                referrerPolicy="no-referrer-when-downgrade"></iframe> */}

      
      
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3806.391652153534!2d78.38304439886228!3d17.440958806069098!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e2259ec6d1%3A0x78b017cc55f52306!2sVittal%20Rao%20Nagar%2C%20Madhapur%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1700225509014!5m2!1sen!2sin" 
      width="600" 
      height="450" 
      style={{ border: 0 }} 
      allowFullScreen="" 
      loading="lazy" 
      className={styles.mapping}
      referrerPolicy="no-referrer-when-downgrade">      
      </iframe>
      
    </div>
  );
};

export default ContactusPage;
