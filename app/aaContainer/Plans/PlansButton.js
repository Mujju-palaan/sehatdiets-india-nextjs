"use client";
import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import { useState } from "react";

const PlansButton = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <div className={styles.btnmain}>
        <Link href="/WeightLossPrograms" onClick={() => setOpenMenu(false)}>
          <button className={styles.btn}>Weight Loss</button>
        </Link>
        <Link href="/WeightGainPrograms" onClick={() => setOpenMenu(false)}>
          <button className={styles.btn}>Weight Gain</button>
        </Link>
        <Link href="/FitnessPerformance" onClick={() => setOpenMenu(false)}>
          <button className={styles.btn}>Fitness </button>
        </Link>
        <Link href="/KidsNutrition" onClick={() => setOpenMenu(false)}>
          <button className={styles.btn}>Kid's Nutrition</button>
        </Link>
        <Link href="/WeddingDeitProgram" onClick={() => setOpenMenu(false)}>
          <button className={styles.btn}>Wedding</button>
        </Link>
        <Link href="/PCOD" onClick={() => setOpenMenu(false)}>
          <button className={styles.btn}>PCOD</button>
        </Link>

        <Link href="/DiabetesDeitProgram" onClick={() => setOpenMenu(false)}>
          <button className={styles.btn}>Diabetes</button>
        </Link>
        <Link href="/MenopauseDeitProgram" onClick={() => setOpenMenu(false)}>
          <button className={styles.btn}>Menopause</button>
        </Link>
      </div>
    </div>
  );
};

export default PlansButton;
