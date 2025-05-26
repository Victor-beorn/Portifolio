import { useEffect } from "react";
import { About } from "../../components/about";
import { Container } from "../../components/container";
import MainTemplate from "../../template/maintemplate";

export function Home() {
    useEffect(() => {
      document.title = '👍 Portifólio ';
    }, []);

  return (
    <MainTemplate>
      <Container>
        <About/>
      </Container>
    </MainTemplate>
  )
}
