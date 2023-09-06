import { ChangeEvent, useState } from "react";
import { Input } from "../../Components/Input";
import { loginReq } from "../../Service/Api";
import Logo from "../../assets/Logo.svg";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

interface ILogin {
  email: string;
  password: string;
}

export function Login() {
  const [payload, setPayload] = useState();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginRequest = async () => {
    let response = await loginReq(email, password);

    if (response.status == 200) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", response.data.user.name);
      navigate("/cadastrar-usuario")
    }
  };

  return (
    <S.Container>
      <S.ChildrenComponentLogo>
        <S.LogoComponent src={Logo} alt="Logo" />
      </S.ChildrenComponentLogo>

      <S.ChildrenComponentInputs>
        <S.ContainerTitle>
          <h2>CONTROLE PATRIMONIAL DE</h2> <h1>MANUTENÇÃO EXTERNA</h1>{" "}
        </S.ContainerTitle>

        <S.ContainerLogin>
          <Input
            label="LOGIN"
            value={email}
            OnChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <Input
            label="SENHA"
            marginTop={1}
            value={password}
            OnChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            password
          />
          <S.ButtonLogin onClick={loginRequest}>LOGIN</S.ButtonLogin>
        </S.ContainerLogin>
      </S.ChildrenComponentInputs>
    </S.Container>
  );
}
