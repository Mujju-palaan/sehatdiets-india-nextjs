'use client'
import React from 'react';
import styles from './TeamCard.module.css'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";


const TeamCard = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
 return (
    <>
    <div>
      <div className={styles.container}>
        {/* <div className={styles.section_title}>
          <h1>Our Team Page</h1>
        </div> */}
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.team}>
              <div className={styles.team_img}>
                <img src={props.image} alt='Team Image'/>
              </div>
              <div className={styles.team_content}>
                <h2>{props.name}</h2>
                <h3>{props.designation}</h3>
                <p>{props.text}</p>
                <h4>{props.email}</h4>

                <div className={styles.media_icons}>
                <Link href="https://www.facebook.com" target="_blank" >
                  <i style={{fontSize:'2rem', color:'#4267b2'}}>
                    {" "}
                    <FaFacebookF />{" "}
                  </i>
                </Link>
                <Link href="https://www.twitter.com" target="_blank" onClick={() => setOpenMenu(false)}>
                  <i style={{fontSize:'2rem', color:'#1da1f2'}}>
                    {" "}
                    <FaTwitter />{" "}
                  </i>{" "}
                </Link>
                <Link
                  href="https://www.instagram.com/sehat_nutrition_/"
                  target="_blank"
                >
                  <i style={{fontSize:'2rem', color:'#e1306c'}}>
                    {" "}
                    <FaInstagram />{" "}
                  </i>
                </Link>
                <Link href="https://www.linkedin.com" target="_blank">
                  <i style={{fontSize:'2rem', color:'#0077b5'}}>
                    {" "}
                    <FaLinkedinIn />{" "}
                  </i>
                </Link>
                <Link href="https://www.youtube.com" target="_blank">
                  <i style={{fontSize:'2rem', color:'#ff0000'}}>
                    {" "}
                    <FaYoutube />{" "}
                  </i>
                </Link>
              </div>
              </div>
              
              
            </div>

          </div>
        </div>

      </div>
    </div>
    </>
 );
};

export default TeamCard;