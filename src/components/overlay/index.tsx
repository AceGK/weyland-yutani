"use client";
import React, { useEffect, useState } from "react";
import MousePosition from "../MousePosition";
import ScrollPosition from "../ScrollPosition";
import WindowDimensions from "../WindowDimensions";
import styles from "./styles.module.scss";

export default function Overlay() {
  const [timestamp, setTimestamp] = useState<string>("");

  useEffect(() => {
    const formatTime = () => {
      const now = new Date();

      const year = now.getFullYear() + 100;
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      setTimestamp(`${year}/${month}/${day} — ${hours}:${minutes}:${seconds} ST`);
    };

    formatTime(); 
    const interval = setInterval(formatTime, 1000); // update every second
    return () => clearInterval(interval); 
  }, []);

  return (
    <>
      <div className="vignette"></div>
      <div className={styles.fullOverlay}>
        <div className={styles.dataTopLeft}>
          <WindowDimensions />
        </div>
        <div className={styles.dataTopRight}>
          <MousePosition />
        </div>
        <div className={styles.dataBottomLeft}>
          <ScrollPosition />
        </div>
        <div className={styles.dataBottomRight}>{timestamp}</div>
      </div>
    </>
  );
}
