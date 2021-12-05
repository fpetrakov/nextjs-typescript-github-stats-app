import Head from "next/head";
import React, { FC, FormEvent, useState } from "react";
import styles from "../styles/modules/Home.module.css";
import { useRouter } from "next/router";

const Home: FC = () => {
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
    <>
      <Head>
        <title>Home</title>
      </Head>

      <h1>Enter Github Username</h1>
      <form onSubmit={handleFormSubmit}>
        <input onChange={handleInputChange} value={searchText} />
      </form>
    </>
  );
};

export default Home;
