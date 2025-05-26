import MainTemplate from "../../template/maintemplate";
import { GenericHtml } from "../../components/genericHtml";
import { Heading } from "../../components/heading";
import { Container } from "../../components/container";

import macaco from '../../assets/img/giphy.gif'


export function NotFaund() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>404 - Página não encontrada</Heading>
          <p>
            Opa! Parece que a página que você está tentando acessar não existe.
            Talvez ela tenha tirado férias, resolvido explorar o universo ou se
            perdido em algum lugar entre dois buracos negros.
          </p>
          <img style={{justifyContent:'center'}} src={macaco} alt="Macaco gif" aria-label="Macaquinhos fofos" title="Macacos fofod" />
          <p>
            Mas calma, você não está perdido no espaço (ainda). Dá pra voltar em
            segurança para a <span style={{color:'#87c44a', fontWeight:'bold'}}>página principal</span> — ou pode ficar por aqui e
            fingir que achou uma página secreta que só os exploradores mais
            legais conseguem acessar.
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
