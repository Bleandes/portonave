import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Layout } from "./Layout";
import { Login } from "./Pages/Login";
import { CadastrarUsuario } from "./Pages/Usuario/CadastrarUsuario";
import { ConsultarUsuario } from "./Pages/Usuario/ConsultarUsuario";

export interface RouteProps {
  path: string;
  // element: () => JSX.Element;
  // permissao?: RoutePermission;
}

export function RoutesGlobal() {
  const Private = ({ children }: any) => {
    const token = localStorage.getItem("token");

    if (!token) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <Private>
              <Layout />
            </Private>
          }
        >
          <Route path="cadastrar-usuario" element={<CadastrarUsuario />} />
          <Route path="consultar-usuario" element={<ConsultarUsuario />} />

          {/* {routesDefinitions.map((value) => (
            <Route
              key={value.path}
              path={value.path}
              element={<Private permission={value.permissao}>{value.element()}</Private>}
            />
          ))} */}

          <Route />
        </Route>
      </Routes>
    </Router>
  );
}
