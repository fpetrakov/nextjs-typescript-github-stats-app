import Link from "next/link";
import React, { FC } from "react";
import { Container } from ".";
import styles from "../styles/modules/Header.module.css";

interface Props {}

const Header: FC<Props> = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <p className={styles.logo}>Github Stats</p>
          <ul className={styles.links}>
            <li className={styles.li}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.li}>
              <a href="https://github.com/fpetrakov">Github</a>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
