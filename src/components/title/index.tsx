import type { ReactNode } from 'react';
import styles from './styles.module.css';

type TitleProps = {
  title: string;
  icon: ReactNode;
};

export function Title({ title, icon }: TitleProps) {
  return (
    <h2 className={styles.sobreTitle}>
       {icon} {title}
    </h2>
  );
}
