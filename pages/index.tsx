import Head from 'next/head'
import type { NextPage } from 'next/types'
import styles from '../styles/modules/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <h1 className={styles.heading}>Home</h1>
    </>
  )
}

export default Home
