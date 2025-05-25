import { Braces } from 'lucide-react';
import { Card } from '../card';
import { Title } from '../title';

import styles from './styles.module.css';

export function Work() {
  return (
    <>
      <Title title='Trabalhos' icon={<Braces />} />
      <div className={styles.work}>
        <Card
          sub='2021-2024'
          title='Desenvolvedor de front-end'
          text='Aqaurium Tech'
        />
        <Card
          sub='mar de 2023 - abr de 2023'
          title='Desenvolvedor de front-end'
          text='Carijó'
        />
      </div>
    </>
  );
}
