import { FC } from "react";
import { Box, MostStarred, TopLanguages } from ".";
import { RepoType } from "../types";
import styles from "../styles/modules/Charts.module.css";

interface Props {
  repos: Array<RepoType>;
}

const Charts: FC<Props> = ({ repos }) => {
  return (
    <div className={styles.charts}>
      <TopLanguages repos={repos} />
      <MostStarred repos={repos} />
    </div>
  );
};

export default Charts;
