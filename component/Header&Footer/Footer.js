"use client";
import React from "react";
import styles from "./footer.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import { MdLocationOn } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

export const metadata = {
  url: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
};

const Footer = () => {
  const style = {
    fontFamily: "ui-sans-serif",
  };
  return (
    <>
      <footer className={styles.footer} style={{color:'#F5F6F9', fontFamily:'sans-serif'}}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles["logo-details"]}>
              {/*<i className={styles.fab fa-slack]></i>*/}
              <span className={styles.logo_name}
                style={{fontFamily:'gill sans',fontSize:'48px',fontWeight:'400',color:'#F5F6F9'}}
              >SEHAT</span>
            </div>
            <div className={styles[`media-icons`]}>
              <Link href="https://www.facebook.com" target="_blank">
                <i>
                  {" "}
                  <FaFacebookF />{" "}
                </i>
              </Link>
              <Link href="https://www.twitter.com" target="_blank">
                <i>
                  {" "}
                  <FaTwitter />{" "}
                </i>{" "}
              </Link>
              <Link
                href="https://www.instagram.com/sehat_nutrition_/"
                target="_blank"
              >
                <i>
                  {" "}
                  <FaInstagram />{" "}
                </i>
              </Link>
              <Link href="https://www.linkedin.com" target="_blank">
                <i>
                  {" "}
                  <FaLinkedinIn />{" "}
                </i>
              </Link>
              <Link href="https://www.youtube.com" target="_blank">
                <i>
                  {" "}
                  <FaYoutube />{" "}
                </i>
              </Link>
            </div>
          </div>
          <div className={styles["link-boxes"]}>
            <ul className={styles.box}>
              <li className={styles.link_name}>Company</li>
              <li >
                <Link href="/" style={{fontSize:'1.4rem'}}>Home</Link>
              </li>
              <li>
                <Link href="/contactus" style={{fontSize:'1.4rem'}}>Contact Us</Link>
              </li>
              <li>
                <Link href="/about" style={{fontSize:'1.4rem'}}>About Us</Link>
              </li>
              <li>
                <Link href="/pricing" style={{fontSize:'1.4rem'}}>Pricing</Link>
              </li>
              <li>
                <Link href="/faqs" style={{fontSize:'1.4rem'}}>Faq's</Link>
              </li>
            </ul>
            <ul className={styles.box}>
              <li className={styles.link_name}>Our Services</li>
              <li>
                <Link href="/WeightLossPrograms" style={{fontSize:'1.4rem'}}>Weight Loss</Link>
              </li>
              <li>
                <Link href="/WeightGainPrograms" style={{fontSize:'1.4rem'}}>Weight Gain</Link>
              </li>
              <li>
                <Link href="/KidsNutrition" style={{fontSize:'1.4rem'}}>Kid's Nutrition</Link>
              </li>
              <li>
                <Link href="/FitnessPerformance" style={{fontSize:'1.4rem'}}>Fitness Performance</Link>
              </li>
              <li>
                <Link href="/DiabetesDeitProgram" style={{fontSize:'1.4rem'}}>Diabetes Deit</Link>
              </li>
              <li>
                <Link href="/MenopauseDeitProgram" style={{fontSize:'1.4rem'}}>Menopause Deit</Link>
              </li>
              <li>
                <Link href="/PCOD" style={{fontSize:'1.4rem'}}>PCOD</Link>
              </li>
              <li>
                <Link href="/WeddingDeitProgram" style={{fontSize:'1.4rem'}}>Wedding Deit</Link>
              </li>
            </ul>
            {/* <div className='footprob'> */}
            <ul className={styles.box}>
              <li className={styles.link_name}>Policy</li>
              <li>
                <Link href="/termscondition" style={{fontSize:'1.4rem'}}>Terms & Condition</Link>
              </li>
              <li>
                <Link href="/cancellationRefund" style={{fontSize:'1.4rem'}}>Cancellation & Refund</Link>
              </li>
              <li>
                <Link href="/privacypolicy" style={{fontSize:'1.4rem'}}>Privacy & Policy</Link>
              </li>
              {/* <li><a href="#">Photoshop</a></li> */}
            </ul>
            <ul className={styles.box}>
              <li className={styles.link_name}>Contact Us</li>
              <li>
                <MdLocationOn
                  style={{ color: "whitesmoke", marginRight: "1rem" }}
                />
                <a href="https://goo.gl/maps/pMLudn9mUUqmGVpZ8" style={{fontSize:'1.4rem'}}>
                  R G K Kowkoor, Secunderabad
                </a>
              </li>
              <li>
                <AiFillPhone
                  style={{ color: "whitesmoke", marginRight: "1rem" }}
                />
                <a href="tel:+917880006363" style={{fontSize:'1.4rem'}}>+917880006363</a>
              </li>
              <li>
                <AiOutlineMail
                  style={{ color: "whitesmoke", marginRight: "1rem" }}
                />
                <a href="mailto:Support@sehatdiets.com" style={{fontSize:'1.4rem'}}>
                  Support@sehatdiets.com
                </a>
              </li>
            </ul>
            {/* </div> */}
            <ul className={`${styles.box} ${styles["input-box"]}`}>
              <li className={styles.link_name}>Subscribe</li>
              <li>
                <input type="text" placeholder="Enter your email" style={{color:'#50D5B1'}} />
              </li>
              <li>
                <input type="button" value="Subscribe" style={{color:'#50D5B1'}}/>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["bottom-details"]} >
          <div className={styles.bottom_text} style={{background:'#50D5B1', fontFamily:'sans-serif'}}>
            <span className={styles.copyright_text}>
              {" "}
              Copyright © 2023
              <Link href="/">SEHAT</Link> All rights reserved{" "}
            </span>
            {/* <span className={footerStyles.policy_terms}>
                          <Link href="/">Privacy policy</Link>
                          <Link href="/">Terms & condition</Link> 
                        </span> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
