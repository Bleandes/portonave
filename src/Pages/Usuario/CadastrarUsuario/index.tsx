import { useEffect, useState } from "react";
import { ContainerTelas } from "../../..";
import { Header } from "../../../Components/Header";
import { Input } from "../../../Components/Input";

export function CadastrarUsuario() {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [telefone, setTelefone] = useState('');
  const [radio, setRadio] = useState('');

  

  useEffect(() => {

  },[])
  
  
  return (
    <ContainerTelas>
      <Header title="Cadastrar Usuário" />

      <Input label="NOME COMPLETO" colorLabelDefault value={nomeCompleto}/>
      <Input label="E-MAIL" colorLabelDefault value={email} />
      <Input label="USUÁRIO" colorLabelDefault value={usuario}/>
      <Input label="SENHA" colorLabelDefault  password value={password}/>



      <Input label="TELEFONE" colorLabelDefault value={telefone}/>
      <Input label="FUNÇÂO" colorLabelDefault typeInput={2} nameCheckbox={['Admin', 'Tecnico', 'Usuário']} value={radio}/>

    </ContainerTelas>
  );
}
