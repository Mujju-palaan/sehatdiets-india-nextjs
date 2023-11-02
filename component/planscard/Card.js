"use client";

import styles from "./Card.module.css";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";

const Card = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.card}>
          {/* <Image src='/nutritionist.png'></Image> */}
          <img
            className={styles.imgs}
            // style={{ objectFit: "cover", margin: ".5rem" }}
            src={props.Images}
            // height={300}
            // width={328}
          ></img>
          <div className={styles.card_content}>
            <h2 style={{ fontSize: "3rem", textAlign: "center" }}>
              {props.title}
            </h2>
            {/* <p>{props.content}</p> */}
            <div style={{ textAlign: "right", justifyContent: "flex-end" }}>
              {/* <div className={styles.btn}>Read More</div> */}
              <Link href={`/${props.link}`} onClick={() => setOpenMenu(false)}>
                <span style={{ textAlign: "right", fontSize: "1.4rem" }}>
                  Read More{" "}
                </span>
                <span>
                  <AiOutlineDoubleRight style={{ paddingTop: "5px" }} />
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* <div>
            <title>
                <h2>Our Health Mission</h2>
            </title>
        </div>
        <div>
            <p>Our experienced medical professionals put your healing needs first. We are proud to 
                provide a high-quality level of customer service, medical experience, and commitment to 
                health and wellness to all our patients. Our goal is to make you feel better as quickly as possible.
            </p>
        </div> */}
      </div>
    </>
  );
};

export default Card;
