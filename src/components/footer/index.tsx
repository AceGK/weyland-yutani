import styles from "./styles.module.scss";
import WeylandYutaniWings from "../../assets/logos/weyland-yutani-wings.svg";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/" className={styles.footer__logo}>
        <WeylandYutaniWings />
      </Link>
      <span className={styles.footer__text}>
          Weyland-Yutani Corporation © 2122
        </span>
    </footer>
  );
};

export default Footer;
