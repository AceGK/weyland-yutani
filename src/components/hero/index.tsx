import styles from "./styles.module.scss";
import Logo from "../../assets/logos/weyland-yutani.svg";
import Button from "../button";
import ScrollIcon from "../../assets/icons/scroll-down.svg";

const cities = [
  "Tokyo",
  "London",
  "San Francisco",
  "Sea of Tranquility",
  "Thedus",
];

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div>
        {/* <h1 className={styles.hero__japanese}>ウェイランド・湯谷</h1> */}
        <h1 className={styles.hero__title}>Weyland-Yutani Corp</h1>
        <div className={styles.hero__logo}>
          <Logo />
        </div>
        <h1 className={styles.hero__subtitle}>building better worlds</h1>
      </div>

      <div id="locationList" className={styles.hero__locations}>
        {cities.map((city) => (
          <span key={city} className={styles.location}>
            {city}
          </span>
        ))}
      </div>

      <ul className={styles.buttons}>
        <Button text="About" href="#about" />
        <Button text="Engineering" href="#engineering" />
        <Button text="Exploration" href="#exploration" />
        <Button text="Terraforming" href="#terraforming" />
      </ul>

      <button
        className={styles.scrollIndicator}
        onClick={() => {
          const nextSection = document.getElementById("about");
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        aria-label="Scroll to next section"
      >
        <ScrollIcon/>
      </button>
    </section>
  );
};

export default Hero;
