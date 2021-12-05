import { FC } from "react";
import { UserType } from "../../types";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import styles from "../../styles/modules/UserPage.module.css";
import { Header } from "../../components";

interface Params extends ParsedUrlQuery {
  login: string;
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { login } = context.params as Params;

  const response = await fetch(`https://api.github.com/users/${login}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user: data,
    },
  };
};

interface Props {
  user: UserType;
}

const UserPage: FC<Props> = ({ user }) => {
  return (
    <>
      <Header />
      <main className={styles.main}></main>
    </>
  );
};

export default UserPage;
