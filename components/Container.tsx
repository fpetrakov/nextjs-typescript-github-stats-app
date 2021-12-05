import { FC, ReactNode } from "react";
import styles from "../styles/modules/Container.module.css";

interface Props {
  mw?: number;
  children: ReactNode;
}

const Container: FC<Props> = ({ mw = 1024, children }) => {
  return (
    <div style={{ maxWidth: `${mw}px` }} className={styles.container}>
      {children}
    </div>
  );
};

export default Container;
