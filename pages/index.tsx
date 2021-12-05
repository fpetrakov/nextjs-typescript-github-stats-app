import Head from "next/head";
import React, { FC, FormEvent, useState } from "react";
import styles from "../styles/modules/HomePage.module.css";
import { useRouter } from "next/router";
import { Container } from "../components";

const HomePage: FC = () => {
  const router = useRouter();

  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e: FormEvent<HTMLInputElement>): void => {
    setSearchText(e.currentTarget.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    router.push(`/users/${searchText}`);

    setSearchText("");
  };

  return (
    <Container mw={380}>
      <main className={styles.main}>
        <Head>
          <title>Home</title>
        </Head>

        <h1 className={styles.heading}>Enter Github Username</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            onChange={handleInputChange}
            value={searchText}
            className={styles.input}
          />
        </form>
      </main>
    </Container>
  );
};

export default HomePage;
