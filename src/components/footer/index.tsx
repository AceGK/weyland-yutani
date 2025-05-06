import Image from "next/image";
import styles from "./styles.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logo}>
        <Image
          src="/weyland-yutani-wings.svg"
          alt="Weyland Yutani"
          fill
          className={styles.footer__img}
        />
      </div>
      <span className={styles.footer__text}>
          Weyland-Yutani Corporation © 2122
        </span>
    </footer>
  );
};

export default Footer;
