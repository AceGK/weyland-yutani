import styles from './styles.module.scss'
import Image from 'next/image'
import Logo from '/public/wy-logo.svg'
import Button from '../button'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div>
        <h1 className={styles.hero__title}
        >Weyland-Yutani Corp</h1>
        <div className={styles.hero__logo}>
          <Image src={Logo} alt='Weyland Yutani' layout='responsive' priority />
        </div>
        <h1 className={styles.hero__subtitle}>building better worlds</h1>
      </div>
      <ul className={styles.hero__locations}>
        <li>Tokyo</li>
        <li>London</li>
        <li>San Francisco</li>
        <li>Sea of Tranquility</li>
        <li>Thedus</li>
      </ul>
      <ul className={styles.buttons}>
      <Button text="About" href="#about" />
      <Button text="Engineering" href="#engineering" />
      <Button text="Exploration" href="#exploration" />
      <Button text="Terraforming" href="#terraforming" />
        {/* <li><a href='#about'>About</a></li>
        <li><a href='#engineering'>Engineering</a></li>
        <li><a href='#exploration'>Exploration</a></li>
        <li><a href='#terraforming'>Terraforming</a></li> */}
      </ul>
    </section>
  )
}