import { ChangeEvent } from "react";
import * as S from "./style";

enum typeInput {
  Text,
  Select,
  Radio,
}

interface IInput {
  typeInput?: typeInput;
  nameCheckbox?: string[];

  label?: string;
  marginTop?: number;
  password?: boolean;
  colorLabelDefault?: boolean;
  value: any;
  OnChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Input(props: IInput) {
  return (
    <>
      <S.Container marginTop={props.marginTop}>
        {!props.typeInput && (
          <>
            <S.Text colorLabelDefault={props.colorLabelDefault}>
              {props.label}
            </S.Text>
            <S.InputText
              type={props.password ? "password" : "text"}
              value={props.value}
              onChange={props.OnChange}
            />
          </>
        )}

        {props.typeInput == 1 && <></>}

        {props.typeInput == 2 && (
          <S.ContainerCheckboxPai>
            <S.Text colorLabelDefault={props.colorLabelDefault}>
              {props.label}
            </S.Text>

            <S.ContainerCheckbox>
              {props.nameCheckbox?.map((x, index) => (
                <>
                  <S.InputCheckboxText>{x}</S.InputCheckboxText>
                  <S.InputCheckbox
                    type="radio"
                    checked={props.value}
                    onChange={props.OnChange}
                  />
                </>
              ))}
            </S.ContainerCheckbox>
          </S.ContainerCheckboxPai>
        )}
      </S.Container>
    </>
  );
}
