import React, { FC } from "react";
import { Box } from ".";
import { RepoType } from "../types";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import randomColor from "../utils/randomColor";

interface Props {
  repos: Array<RepoType>;
}

const MostStarred: FC<Props> = ({ repos }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const filteredRepos = [...repos]
    .sort((a, b) =>
      // sort repos by amount of stars
      a.stargazers_count < b.stargazers_count
        ? 1
        : b.stargazers_count < a.stargazers_count
        ? -1
        : 0
    )
    .splice(0, 5);

  const labels = filteredRepos.map(repo => repo.name);
  const stars = filteredRepos.map(repo => repo.stargazers_count);
  const backgroundColor = filteredRepos.map(repo => randomColor());

  const data = {
    labels,
    datasets: [
      {
        label: "Most Starred",
        data: stars,
        backgroundColor,
      },
    ],
  };

  const options = {
    aspectRatio: 1,
  };

  return (
    <Box>
      <h2>Most Starred</h2>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default MostStarred;
