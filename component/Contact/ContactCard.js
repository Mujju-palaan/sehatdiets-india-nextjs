"use client";
import styles from "./Common.module.css";

import { MdEmail, MdForum, MdWhatsapp } from "react-icons/md";
import Link from "next/link";

const ContactCard = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.grid_card}>
            <i>
              {" "}
              <MdEmail />{" "}
            </i>
            <h2>Email</h2>
            <p>Monday to Friday Expected </p>
            <p className={styles.last_para}>response time: 48-72 hours </p>
            <Link href="mailto:max.support@sehatdiets.com?body=My custom mail body">
              {" "}
              Send Email <span>-&gt;</span>
            </Link>
          </div>

          <div className={styles.grid_card}>
            <i>
              {" "}
              <MdWhatsapp />{" "}
            </i>
            <h2>Whatsapp Chat</h2>
            <p>Weekdays: 9 AM — 5 PM ET</p>
            <p className={styles.last_para}>Weekends: 9 AM — 5 PM ET </p>
            <Link
              
              href="//api.whatsapp.com/send?phone=917867837866 
                        &text=WHATEVER_LINK_OR_TEXT_YOU_WANT_TO_SEND"
            >
              {" "}
              Chat Now <span>-&gt;</span>
            </Link>
          </div>

          <div className={styles.grid_card}>
            <i>
              {" "}
              <MdForum />{" "}
            </i>
            <h2>Community Forum</h2>
            <p>Monday to Friday Expected </p>
            <p className={styles.last_para}>response time: 48-72 hours </p>
            <Link href="/" className={styles.anchorLink}>
              {" "}
              Ask The Community <span>-&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
