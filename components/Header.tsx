import React from "react";
import { LinkProp } from "../interfaces/";
import styles from "../styles/styles.module.css";
import { MapLinks } from "./MapLinks";

interface HeaderProps {
  links: LinkProp[];
}

export const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <header
      className={`${styles.flex}  ${styles.fixed} ${styles.maxWidth} ${styles.bg_black} ${styles.fg_wheat}`}
      style={{ height: "4rem" }}
    >
      <h1 className={styles.absolute} style={{ left: "1rem", top: "1rem" }}>
        RPG GAME
      </h1>
      <div
        className={`${styles.absolute} ${styles.flex}`}
        style={{
          right: "1rem",
          top: "1rem",
        }}
      >
        <MapLinks links={links} />
      </div>
    </header>
  );
};
