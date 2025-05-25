import { Container } from '../../components/container';
import { Perfil } from '../../components/perfil';
import { Menu } from '../../components/menu';

import styles from './styles.module.css';

type MainTemplateProps = {
  children: React.ReactNode;
};

export default function MainTemplate({ children }: MainTemplateProps) {
  return (
    <div className={styles.mainTemplate}>
      <Container>
        <Perfil />
      </Container>
      <Container>
        <Menu />
        <div className={styles.mainBackground}>{children}</div>
      </Container>
    </div>
  );
}
