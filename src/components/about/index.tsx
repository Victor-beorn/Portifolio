import { CircleUser, GraduationCap } from 'lucide-react';
import { Card } from '../card';

import styles from './styles.module.css';

export function About() {
  return (
    <div className={styles.sobre}>
      <h2 className={styles.sobreTitle}>
        <CircleUser /> Sobre mim
      </h2>
      <p className={styles.sobreCard}>
        Sou Victor Alves, desenvolvedor front-end com mais de 3 anos de
        experiência entregando soluções web funcionais, rápidas e orientadas à
        experiência do usuário. Minha principal expertise está em React, PHP e
        integração com bancos de dados MySQL, além do uso de serviços AWS para
        garantir performance e escalabilidade. <br />
        <br />
        Ao longo da minha trajetória, participei de projetos completos — do
        briefing ao deploy — criando interfaces responsivas, intuitivas e
        alinhadas aos objetivos de negócio. Tenho forte capacidade de entender a
        dor do cliente e traduzir isso em código limpo, funcional e sustentável.
        <br />
        <br />
        Estou em constante evolução, buscando sempre aplicar boas práticas,
        novas tecnologias e contribuir com times ágeis na construção de produtos
        digitais de alto impacto.
      </p>
      <h2 className={styles.sobreTitle}>
        <GraduationCap /> Formação
      </h2>
      <Card
        
        sub='2021-2023'
        title='Análise e Desenvolvimento de Sistemas'
        text='Centro Universitário UNA'
      />
    </div>
  );
}
