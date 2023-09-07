import { useEffect, useState } from "react";
import * as S from "./style";
import { Placeholder } from "@phosphor-icons/react";

interface ISearch {
  search?: string;
  endpoint?: string;

  Placeholder?: string;
  label: string;
}

export function Search(props: ISearch) {
  const search = (search: string) => {
    if (search.length > 3) {
      /**
       * @description montar request fazer search
       */
      //props.endpoint
    }
    return;
  };

  useEffect(() => {}, []);

  return (
    <S.ContainerSearch>
      <S.Label>BUSCAR {props.label}</S.Label>
      <S.Search
        placeholder={props.Placeholder}
        onChange={(e) => search(e.target.value)}
      />
    </S.ContainerSearch>
  );
}
