import "./login.style.css";
import { HOME, REGISTER } from "../../../constants/routes.constants";
import { useState } from "react";
import { useGlobalUser } from "../../../context/user.context";
import { useImcApi } from "../../../api/imcApi/imc.api";
import { Redirect, useHistory } from "react-router";
import { Button, Input } from "../../component";

export function LoginScreen() {
  const [formInput, setFormInput] = useState({ email: "", password: "" });
  const [globalUser, setGlobalUser] = useGlobalUser();
  const [logging, setLogging] = useState(false);
  const [error, setError] = useState();

  const imcApi = useImcApi();
  const history = useHistory();

  if (globalUser.user) {
    return <Redirect to={HOME} />;
  }

  function handleChange(name, text) {
    setFormInput({ ...formInput, [name]: text });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLogging(true);
    const { email, password } = formInput;
    try {
      const response = await imcApi.login(email, password);
      setGlobalUser({ ...globalUser, user: response });
      history.push(HOME);
    } catch (error) {
      setError(error.message);
      setLogging(false);
    }
  }

  function handleRegister() {
    history.push(REGISTER);
  }

  return (
    <div className="login__screen">
      <p className="register-screen__title">Login Imc App</p>
      <form
        className="login__screen_form"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <Input
          name="email"
          value={formInput["email"]}
          onChange={handleChange}
          placeholder="E-mail"
          textalign={"left"}
          label={"E-mail"}
        />
        <Input
          name="password"
          value={formInput["password"]}
          onChange={handleChange}
          placeholder="Senha"
          textalign={"left"}
          label={"Senha"}
          type={"password"}
        />
        {error && <label className="form__error_text">{error}</label>}
        <div className="login__screen_btn">
          <Button
            color={"green"}
            onClick={handleSubmit}
            disabled={
              logging ||
              Object.keys(formInput).some(
                (formInputKey) => formInput[formInputKey].length <= 0
              )
            }
          >
            {logging ? "ENTRANDO..." : "ENTRAR"}
          </Button>
          <Button onClick={handleRegister}>CADASTRAR</Button>
        </div>
      </form>
    </div>
  );
}
