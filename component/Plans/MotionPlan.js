import React from "react";
import styles from "./styles.module.css";

const MotionPlan = (props) => {
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.title}>{props.title}</h1>
        <div className={styles.content}>
          <div style={{ paddingBottom: "2rem" }}>
            <h2 className={styles.heading}>{props.title1}</h2>
            <p className={styles.content}>{props.Intro_content}</p>
          </div>

          <div>
            <h2 className={styles.heading}>{props.title3}</h2>
            <p className={styles.content}>{props.Approach_content}</p>
          </div>

          <h2 className={styles.heading}>{props.title4}</h2>

          <div>
            <h2 className={styles.mb0}>
              <span className={styles.circle}>1</span>{" "}
              <span className={styles.heading}>{props.subtitle1}</span>
            </h2>
            <p className={styles.content}>{props.subcontent1}</p>
          </div>

          <h2 className={styles.mb0}>
            <span className={styles.circle}>2</span>{" "}
            <span className={styles.heading}>{props.subtitle2}</span>
          </h2>
          <p className={styles.content}>{props.subcontent2}</p>

          <h2 className={styles.mb0}>
            <span className={styles.circle}>3</span>{" "}
            <span className={styles.heading}>{props.subtitle3}</span>
          </h2>
          <p className={styles.content}>{props.subcontent3}</p>

          <h2 className={styles.mb0}>
            <span className={styles.circle}>4</span>{" "}
            <span className={styles.heading}>{props.subtitle4}</span>
          </h2>
          <p className={styles.content}>{props.subcontent4}</p>

          <h2 className={styles.mb0}>
            <span className={styles.circle}>5</span>{" "}
            <span className={styles.heading}>{props.subtitle5}</span>
          </h2>
          <p className={styles.content}>{props.subcontent5}</p>

          <h2 className={styles.mb0}>
            {/* <span className={styles.circle}>7</span>{" "} */}
            <span className={styles.heading}>{props.whytitle}</span>
          </h2>
          <p className={styles.content}>{props.whycontent1}</p>
          <p className={styles.content}>{props.whycontent2}</p>
          <p className={styles.content}>{props.whycontent3}</p>

          <h2 className={styles.mb0}>
            <span className={styles.heading}>{props.contact}</span>
          </h2>
          <p className={styles.content}>{props.contactcontent}</p>
        </div>
      </div>
    </>
  );
};

export default MotionPlan;

