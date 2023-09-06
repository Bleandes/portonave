import {
  Briefcase,
  Gear,
  ShoppingCart,
  UserCircle,
  UsersThree,
} from "@phosphor-icons/react";
import * as S from "./style";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function Sidebar() {
  let subMenus = [
    {
      title: "Usuários",
      icon: <UsersThree size={32} color="#fafafa" weight="thin" />,
      sub: [
        { subTitle: "Cadastrar", url: "cadastrar-usuario" },
        { subTitle: "Consultar" },
      ],
      //sub: ["Cadastrar", "Consultar"],
    },
    {
      title: "Fornecedor",
      icon: <ShoppingCart size={32} color="#fafafa" weight="thin" />,
      sub: [
        { subTitle: "Cadastrar", url: "cadastrar-usuario" },
        { subTitle: "Consultar" },
      ],
      //sub: ["Cadastrar", "Consultar"],
    },
    {
      title: "O.S",
      icon: <Briefcase size={32} color="#fafafa" weight="fill" />,
      sub: [
        { subTitle: "Cadastrar", url: "cadastrar-usuario" },
        { subTitle: "Consultar" },
      ],
      //sub: ["Cadastrar", "Consultar"],
    },
    {
      title: "Equipamentos",
      icon: <div style={{ paddingLeft: "2.1rem" }}></div>,
      sub: [
        { subTitle: "Cadastrar", url: "cadastrar-usuario" },
        { subTitle: "Consultar" },
      ],
      //sub: ["Cadastrar", "Consultar"],
    },
    {
      title: "Relatórios",
      icon: <div style={{ paddingLeft: "2.1rem" }}></div>,
      sub: [],
    },
  ];

  let subMenusPreferencias = [
    {
      icon: <div style={{ paddingLeft: "2.1rem" }}></div>,
      name: "Minha conta",
    },
    {
      icon: <Gear size={32} color="#fafafa" weight="fill" />,
      name: "Configurações",
    },
  ];

  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(localStorage.getItem("user") ?? "");
  }, []);

  return (
    <>
      <S.Sidebar>
        <S.ContainerUserName>
          <UserCircle size={50} color="#ffffff" weight="light" />
          <S.NameUser>{user}</S.NameUser>
        </S.ContainerUserName>

        <section>
          <div>
            <S.ContainerMenu>
              <S.Menu>Menu</S.Menu>
            </S.ContainerMenu>

            <div>
              {subMenus.map((x, index) => (
                <>
                  <S.ItemsMenu key={x.title}>
                    <S.Image>{x.icon}</S.Image>
                    <S.SubMenus>{x.title}</S.SubMenus>
                  </S.ItemsMenu>
                  {x.sub.map((x) => (
                    <S.LinkCustom to={x.url ?? ""}>
                      <S.SubSubMenus>{x.subTitle}</S.SubSubMenus>
                    </S.LinkCustom>
                  ))}
                </>
              ))}
            </div>
          </div>

          <div>
            <S.ContainerPreferencias>
              <S.Menu>Preferencias</S.Menu>
            </S.ContainerPreferencias>
            {subMenusPreferencias.map((x, index) => (
              <S.ItemsMenu key={index}>
                <S.Image>{x.icon}</S.Image>
                <S.SubMenusPreferencias>{x.name}</S.SubMenusPreferencias>
              </S.ItemsMenu>
            ))}
          </div>
        </section>
      </S.Sidebar>
    </>
  );
}
