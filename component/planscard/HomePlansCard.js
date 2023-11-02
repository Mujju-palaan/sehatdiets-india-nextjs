// 'use client'
import React from 'react'
import styles from './HomePlansCard.module.css'
import Image from 'next/image'
import { AiOutlineDoubleRight } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";

const HomePlansCard = (props) => {
    // const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className={styles.card}>
        {/* <Image
          width={576}
          height={576}
          src={props.Images}
          className={styles.img}
          alt="Image"
        /> */}
        <img
        src={props.Images}
        className={styles.img}
        />
        <h2
          style={{
            textAlign: "center",
            padding: "1.5rem 0 0 0",
            fontWeight: "500",
            marginBottom: "0rem",
            fontFamily:'Pangeatext,sans-serif',
            color:'#50D5B1',
            fontSize:'3rem'
          }}
        >
          {props.title}
        </h2>
        <p style={{padding:'0rem 2rem', color:'gray', fontSize:'1.2rem',fontFamily:'Pangeatext,sans-serif'}}>{props.content}</p>
        {/* <div style={{ textAlign: "right", justifyContent: "flex-end", padding:'1rem'}}>
              <Link href={`/${props.link}`} onClick={() => setOpenMenu(false)}>
                <span style={{ textAlign: "right", fontSize: "1.4rem" }}>
                  Read More{" "}
                </span>
                <span>
                  <AiOutlineDoubleRight style={{ paddingTop: "5px" }} />
                </span>
              </Link>
        </div> */}
        
    </div>
  )
}

export default HomePlansCard