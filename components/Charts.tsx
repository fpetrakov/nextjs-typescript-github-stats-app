import { FC } from "react";
import { Box, TopLanguages } from ".";
import { RepoType } from "../types";

interface Props {
  repos: Array<RepoType>;
}

const Charts: FC<Props> = ({ repos }) => {
  return (
    <Box>
      <TopLanguages repos={repos} />
    </Box>
  );
};

export default Charts;
