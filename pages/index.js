import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          building better worlds
        </h1>
        <div className={styles.locations}>
          <p>Tokyo</p>
          <p>London</p>
          <p>San Francisco</p>
          <p>Sea of Tranquility</p>
          <p>Thedus</p>
        </div>
      </main>

      <section id="about" className={styles.section}>
        <h1>about</h1>
      </section>

      <section id="engineering" className={styles.section}>
        <h1>engineering</h1>
      </section>

      <section id="exploration" className={styles.section}>
        <h1>exploration</h1>
      </section>

      <section id="terraforming" className={styles.section}>
        <h1>terraforming</h1>
      </section>

    </div>
  )
}
