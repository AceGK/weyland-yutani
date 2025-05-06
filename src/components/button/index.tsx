import Link from "next/link";
import styles from "./styles.module.scss";

interface ButtonProps {
  text?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  fill?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text = "Click Me",
  href,
  type = "button",
  onClick,
  fill = false,
}) => {

  if (href) {
    return (
      <div className={`${styles.button} ${fill ? styles.fill : ""}`}>
        <Link href={href}>{text}</Link>
      </div>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${styles.button} ${fill ? styles.fill : ""}`}>
      {text}
    </button>
  );
};

export default Button;
