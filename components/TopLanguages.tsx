import { FC } from "react";
import randomColor from "../utils/randomColor";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { RepoType } from "../types";

interface Props {
  repos: Array<RepoType>;
}

const TopLanguages: FC<Props> = ({ repos }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const languages = repos.map(repo => repo.language);

  let languagesCounts: Record<string, number> = {};
  const backgroundColors: Array<string> = [];

  for (let lang of languages) {
    // some repos don't have language at all
    if (lang === null) continue;
    languagesCounts[lang] = (languagesCounts[lang] || 0) + 1;
    backgroundColors.push(randomColor());
  }

  const data = {
    labels: Object.keys(languagesCounts),
    datasets: [
      {
        label: "Top Languages",
        data: Object.values(languagesCounts),
        backgroundColor: backgroundColors,
      },
    ],
  };

  return (
    <>
      <h2>Top Languages</h2>
      <Pie data={data} />
    </>
  );
};

export default TopLanguages;
