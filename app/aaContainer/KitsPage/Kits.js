import React from "react";
import styles from "./styles.module.css";
import KitsimgCard from "../../../../components/Kits/KitsimgCard";

const Kits = (props) => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <img className={styles.imgsize} src={props.bannerImage}></img>
        <h1>{props.title}</h1>
        <p>{props.content}</p>

        <div
          style={{
            textAlign: "center",
            display: "flex",
            gap: "4rem",
            justifyContent: "center",
          }}
        >
          <KitsimgCard image={props.img1} title={props.title1} />
          <KitsimgCard image={props.img2} title={props.title2} />
          <KitsimgCard image={props.img3} title={props.title3} />
        </div>
      </div>
    </>
  );
};

export default Kits;
