import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/styles.module.css";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const [hover, setHover] = useState(false);
  return (
    <header
      className={`${styles.flex}  ${styles.fixed} ${styles.maxWidth} ${styles.bg_black} ${styles.fg_wheat}`}
      style={{ height: "4rem" }}
    >
      <h1 className={styles.absolute} style={{ left: "1rem", top: "1rem" }}>
        RPG GAME
      </h1>
      <Link href="\game-manager">
        <a
          className={`${styles.absolute} ${styles.fg_wheat}`}
          style={{
            right: "1rem",
            top: "1rem",
            textDecoration: hover ? "underline" : "none",
            cursor: "pointer",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Game Manager
        </a>
      </Link>
    </header>
  );
};
