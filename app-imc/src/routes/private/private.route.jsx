import { LOGIN } from "../../constants/routes.constants";
import { useGlobalUser } from "../../context/user.context";
import { Redirect, Route } from "react-router";

export function PrivateRoute({ path, children }) {
  const [globalUser] = useGlobalUser();

  if (!globalUser.user) {
    return <Redirect to={LOGIN} />;
  }

  return (
    <Route path={path} exact>
      {children}
    </Route>
  );
}
