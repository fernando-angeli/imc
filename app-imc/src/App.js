import "./App.css";
import { Route, Redirect } from "react-router";
import { PrivateRoute } from "./routes/private/private.route";
import { LoginScreen, RegisterScreen, MeasurementScreen } from "./ui/screens";
import {
  LOGIN,
  MEASUREMENT,
  REGISTER,
  HOME,
} from "./constants/routes.constants";
import { HomeScreen } from "./ui/screens/home/home.screen";

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Redirect to={LOGIN} />
      </Route>
      <Route path={LOGIN} exact>
        <LoginScreen />
      </Route>
      <Route path={REGISTER} exact>
        <RegisterScreen />
      </Route>
      <PrivateRoute path={HOME} exact>
        <HomeScreen />
      </PrivateRoute>
      <PrivateRoute path={MEASUREMENT} exact>
        <MeasurementScreen />
      </PrivateRoute>
    </div>
  );
}

export default App;
