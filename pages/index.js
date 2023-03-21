import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import { Canvas, useFrame } from '@react-three/fiber'

export default function Home() {
  // introductory text about me
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Head>
          <title>Home</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome!
          </h1>
          <p className={styles.description}>
            I'm Sam, a programmer with a love for all things gaming (and a soft spot for retro games). I'm interested in game modding and console modding (check out my <a href="/consoles">collection!</a>). I also have a background in <a href="https://www.youtube.com/@retro1/videos">speedrunning.</a>
          </p>
          <div className={styles.grid}>
            <Link href="/portfolio" className={styles.card}>
              <h2>Portfolio &rarr;</h2>
              <p>Check out some of my projects!</p>
            </Link>
          </div>
        </main>
      </div>
    </>
  )
}
