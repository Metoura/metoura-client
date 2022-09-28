import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HeroSection from '../components/HeroSection'
import Footer from '../components/home/Footer'
import Newsletter from '../components/home/Newsletter'
import TouristReviewCard from '../components/home/TouristReviewCard'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 

      {/* <HeroSection /> */}
      <TouristReviewCard/>
    </div>
  )
}

export default Home
