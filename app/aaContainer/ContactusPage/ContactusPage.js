import { color } from 'framer-motion';
import ContactCard from '../../../component/Contact/ContactCard'
import ContactForm from '../../../component/Contact/ContactForm'
import styles from "./Contact.module.css";
import Email from './Email'
import Counter from './Counter'

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
      
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3806.391652153534!2d78.38304439886228!3d17.440958806069098!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e2259ec6d1%3A0x78b017cc55f52306!2sVittal%20Rao%20Nagar%2C%20Madhapur%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1700225509014!5m2!1sen!2sin" 
      width="600" 
      height="450" 
      style={{ border: 0 }} 
      allowFullScreen="" 
      loading="lazy" 
      className={styles.mapping}
      referrerPolicy="no-referrer-when-downgrade">      
      </iframe> */}

      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d30436.72835523431!2d78.51400743801555!3d17.52702486014986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s2%20%2F%202%204%2C%20R%20G%20K%20KOWKOOR%2C%20KOWKOOR%20-%20VILLAGE%2C%20Secunderabad%2C%20Hyderabad%2C%20Telangana%2C%20500010!5e0!3m2!1sen!2sin!4v1700251501603!5m2!1sen!2sin" 
        width="600" 
        height="450" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy" 
        className={styles.mapping}
        referrerPolicy="no-referrer-when-downgrade">       
      </iframe> */}
      <div>
        <Counter />
      </div>
    </div>
  );
};

export default ContactusPage;
