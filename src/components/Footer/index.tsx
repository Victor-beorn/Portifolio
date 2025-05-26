import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a>👍 Portifólio - Victor Alves &copy; {new Date().getFullYear()}</a>
    </footer>
  );
}
