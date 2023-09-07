import * as S from "./style";
import { useNavigate } from "react-router-dom";

interface IButton {
  onClickCancelar?: () => void;
  onClickAdicionar: () => void;
}

export function ButtonsDefault(props: IButton) {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.ButtonCancelar
        onClick={props.onClickCancelar ?? (() => navigate("/dashboard"))}
      >
        Cancelar
      </S.ButtonCancelar>
      <S.ButtonAdicionar onClick={props.onClickAdicionar}>
        Adicionar
      </S.ButtonAdicionar>
    </S.Container>
  );
}
