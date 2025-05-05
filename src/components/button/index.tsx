import Link from 'next/link';
import styles from './styles.module.scss';

export default function Button({ text = 'Click Me', href = '#' }) {
  return (
    <div className={styles.button}>
      <Link href={href}>
        {text}
      </Link>
    </div>
  );
}