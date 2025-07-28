"use client";

import { AnimatePresence } from "framer-motion";
import Nav from "./nav";
import styles from "./style.module.scss";

import React, { useState } from "react";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.button} onClick={() => setIsActive(!isActive)}>
        <div
          className={`${styles.burguer} ${
            isActive ? styles.burguerActive : ""
          }`}
        ></div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
}
