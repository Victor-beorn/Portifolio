import { useEffect } from 'react';
import { CardWorks } from '../../components/cardWorks';
import { Container } from '../../components/container';
import MainTemplate from '../../template/maintemplate';

export function Portifolio() {
  useEffect(() => {
    document.title = '🖼️ Portifólio de Victor Alves ';
  }, []);
  
  return (
    <MainTemplate>
      <Container>
        <CardWorks />
      </Container>
    </MainTemplate>
  );
}
