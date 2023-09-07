import { useEffect, useState } from "react";
import { ContainerTelas } from "../../..";
import { Header } from "../../../Components/Header";
import { Input } from "../../../Components/Input";
import * as S from "./style";
import { ButtonsDefault } from "../../../Components/Buttons";

export function CadastrarUsuario() {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [telefone, setTelefone] = useState("");
  const [radio, setRadio] = useState("");

  useEffect(() => {}, []);

  /**
   * @description montar request post para enviar formulario
   */
  const submitForm = () => {};

  return (
    <ContainerTelas>
      <Header title="Cadastrar Usuário" />

      <S.Container>
        <S.ContainerItems>
          <Input label="NOME COMPLETO" colorLabelDefault value={nomeCompleto} />
          <Input label="E-MAIL" colorLabelDefault value={email} />
          <Input label="USUÁRIO" colorLabelDefault value={usuario} />
          <Input label="SENHA" colorLabelDefault password value={password} />
        </S.ContainerItems>

        <S.ContainerItems>
          <Input label="TELEFONE" colorLabelDefault value={telefone} />
          <Input
            label="FUNÇÂO"
            colorLabelDefault
            typeInput={2}
            nameCheckbox={["Admin", "Tecnico", "Usuário"]}
            value={radio}
          />
          <Input
            label="STATUS DA CONTA"
            colorLabelDefault
            typeInput={1}
            options={["Ativo", "Desativado"]}
            value={radio}
          />
          <ButtonsDefault onClickAdicionar={submitForm}  />
        </S.ContainerItems>
      </S.Container>
    </ContainerTelas>
  );
}
