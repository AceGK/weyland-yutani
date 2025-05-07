import Link from "next/link";
import styles from "./styles.module.scss";

interface ButtonProps {
  text?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  fill?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  text = "Click Me",
  href,
  type = "button",
  onClick,
  fill = false,
  className = "",
  children,
}) => {
  const buttonClass = `${styles.button} ${fill ? styles.fill : ""} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {children || text}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonClass}>
      {children || text}
    </button>
  );
};

export default Button;
