import type { NextPage } from 'next'
import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import Body from '../components/home/Body'
import styles from '../styles/Home.module.css'
import TouristReviewBody from '../components/home/TouristReviewBody'
import Newsletter from '../components/home/Newsletter'
import BlogSection from '../components/home/BlogSection'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <HeroSection/>
      <Body/>
      <TouristReviewBody/>
    </div>
  )
}

export default Home
