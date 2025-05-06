import styles from './styles.module.scss';
import Image from 'next/image';
import Logo from '../../assets/weyland-yutani.svg';
import Button from '../button';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div>
        <h1 className={styles.hero__title}>Weyland-Yutani Corp</h1>
        <div className={styles.hero__logo}>
          <Logo />
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
      </ul>
    </section>
  );
};

export default Hero;
