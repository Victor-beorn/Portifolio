
import styles from './styles.module.css'

type CardProps = {
  title: string;
  text: string;
  sub: string;
  image?: string; // imagem opcional
};

export function Card({ title, text, image, sub }: CardProps) {
  return (
    <div className={styles.card}>
      <p className={styles.cardSub}>{sub}</p>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p>{text}</p>
      {image && (
        <img
          src={image}
          alt={title}
          style={{ width: '100%', borderRadius: '8px', marginTop: '10px' }}
        />
      )}
    </div>
  );
}
  