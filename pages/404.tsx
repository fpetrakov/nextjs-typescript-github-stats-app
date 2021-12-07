import { FC } from "react";
import styles from "../styles/modules/Error.module.css";

const Error: FC = () => {
  return (
    <div className={styles.error}>
      <h1>404</h1>
      <p>Page not found...</p>
    </div>
  );
};

export default Error;
