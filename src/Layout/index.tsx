import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import * as S from "./style";

export function Layout() {
  return (
    <S.ContainerLayout>
      <Sidebar />
      <Outlet />
    </S.ContainerLayout>
  );
}
