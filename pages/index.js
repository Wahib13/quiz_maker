import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome!
        </h1>

        <p className={styles.description}>
          This site is for making quizzes
        </p>

        <Link href="/create_question">
          <a className={styles.card}>
            <h2>Get Started &rarr;</h2>
            <p>Create your first ever multiple choice quiz with QuizMaker</p>
          </a>
        </Link>
      </main>

      <footer className={styles.footer}>
        Powered by Wahib
      </footer>
    </div>
  )
}
