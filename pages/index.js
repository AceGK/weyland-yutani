import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Logo from '../public/wy-logo.svg'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>Weyland-Yutani Corp</h1>
          <div className={styles.logo}>
            <Image src={Logo} alt='Weyland Yutani' layout="responsive" />
          </div>
          <h1 className={styles.subTitle}>building better worlds</h1>
        </div>
        <ul className={styles.locations}>
          <li>Tokyo</li>
          <li>London</li>
          <li>San Francisco</li>
          <li>Sea of Tranquility</li>
          <li>Thedus</li>
        </ul>
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
