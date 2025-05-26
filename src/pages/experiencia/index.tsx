import { useEffect } from 'react';
import { Container } from '../../components/container';
import { Work } from '../../components/works';
import MainTemplate from '../../template/maintemplate';

export function Experiencias() {
  useEffect(() => {
    document.title = '💼 Experiências de Victor Alves';
  }, []);

  return (
    <MainTemplate>
      <Container>
        <Work />
      </Container>
    </MainTemplate>
  );
}
