import Link from "next/link";
import { useState } from "react";
import { LinkProp } from "../interfaces";
import styles from "../styles/styles.module.css";

interface MapLinksProps {
  links: LinkProp[];
}

export const MapLinks: React.FC<MapLinksProps> = ({ links }) => {
  return (
    <>
      {links.map((link, id) => {
        const [hover, setHover] = useState(false);
        return (
          <div style={{ marginLeft: ".5rem" }} key={id}>
            <Link href={link.href}>
              <a
                className={styles.fg_wheat}
                style={{
                  textDecoration: hover ? "underline" : "none",
                  cursor: "pointer",
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                {link.label}
              </a>
            </Link>
          </div>
        );
      })}
    </>
  );
};
