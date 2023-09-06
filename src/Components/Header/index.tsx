import { SignOut } from "@phosphor-icons/react";
import * as S from "./style";

interface IHeader {
  title: string;
}

export function Header({ title }: IHeader) {
  return (
    <>
      <S.Header>
        <S.ContainerTitle>
          <S.Title> {title} </S.Title>
        </S.ContainerTitle>

        <S.ContainerSair>
          <S.Sair>
            <SignOut size={32} color="#ffffff" weight="thin" />
          </S.Sair>
        </S.ContainerSair>
      </S.Header>
    </>
  );
}
