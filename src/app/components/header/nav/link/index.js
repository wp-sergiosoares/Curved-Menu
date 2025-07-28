import styles from "./style.module.scss";

import Link from "next/link";

import { motion } from "framer-motion";

import { slide } from "../../anim";

export default function index({ data }) {
  const { title, href, index } = data;

  return (
    <motion.div
      className={styles.link}
      variants={slide}
      animation="enter"
      exit="exit"
      initial="initial"
      custom={index}
    >
      <Link href={href}>{title}</Link>
    </motion.div>
  );
}
