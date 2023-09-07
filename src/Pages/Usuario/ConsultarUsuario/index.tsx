import { ContainerTelas } from "../../..";
import { Header } from "../../../Components/Header";
import { Search } from "../../../Components/Search";
import { TableComponent } from "../../../Components/Table";
import * as S from "./style";

export function ConsultarUsuario() {
  return (
    <ContainerTelas>
      <Header title="Consultar Usuário" />

      <S.Container>
        <Search Placeholder="Digite sua Busca" label="USUÁRIO"/>
        <TableComponent />
      </S.Container>
    </ContainerTelas>
  );
}
