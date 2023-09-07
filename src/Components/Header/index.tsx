import { SignOut } from "@phosphor-icons/react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

interface IHeader {
  title: string;
}

export function Header({ title }: IHeader) {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <>
      <S.Header>
        <S.ContainerTitle>
          <S.Title> {title} </S.Title>
        </S.ContainerTitle>

        <S.ContainerSair>
          <S.Sair onClick={logout}>
            <SignOut size={32} color="#ffffff" weight="thin" />
          </S.Sair>
        </S.ContainerSair>
      </S.Header>
    </>
  );
}
