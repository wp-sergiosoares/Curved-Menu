import Link from "./link";
import Curve from "./curve";
import styles from "./style.module.scss";

import { motion } from "framer-motion";

import React from "react";

import { menuSlide } from "../anim";

export default function Nav() {
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <motion.div
      className={styles.menu}
      animate="enter"
      exit="exit"
      initial="initial"
      variants={menuSlide}
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((item, index) => {
            return <Link data={{ ...item, index }} key={index} />;
          })}
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
