import React, { FC, ReactNode } from "react";
import styles from "../styles/modules/Box.module.css";

interface Props {
  children: ReactNode;
}

const Box: FC<Props> = ({ children }) => {
  return <div className={styles.box}>{children}</div>;
};

export default Box;
