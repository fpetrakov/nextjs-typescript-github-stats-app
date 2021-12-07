import { FC } from "react";
import { RepoType, UserType } from "../../types";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import styles from "../../styles/modules/UserPage.module.css";
import { Charts, Container, Header, UserCard } from "../../components";

interface Params extends ParsedUrlQuery {
  login: string;
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { login } = context.params as Params;

  const resUser = await fetch(`https://api.github.com/users/${login}`);
  const dataUser = await resUser.json();

  let dataRepos;
  if (dataUser.message !== "Not Found") {
    const resRepos = await fetch(dataUser.repos_url);
    dataRepos = await resRepos.json();
  }

  if (!dataUser || dataUser.message === "Not Found") {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user: dataUser,
      repos: dataRepos,
    },
  };
};

interface Props {
  user: UserType;
  repos: Array<RepoType>;
}

const UserPage: FC<Props> = ({ user, repos }) => {
  return (
    <div className={styles.page}>
      <Head>
        <title>{user.login}</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <Container mw={400}>
          <div className={styles.inner}>
            <UserCard user={user} />
            <Charts repos={repos} />
          </div>
        </Container>
      </main>
    </div>
  );
};

export default UserPage;
