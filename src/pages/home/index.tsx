import { About } from "../../components/about";
import { Container } from "../../components/container";
import MainTemplate from "../../template/maintemplate";

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <About/>
      </Container>
    </MainTemplate>
  )
}
