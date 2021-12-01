import "./register.style.css";
import { LOGIN } from "../../../constants/routes.constants";
import { useState } from "react";
import { Button, Input } from "../../component";
import { useImcApi } from "../../../api/imcApi/imc.api";
import { useHistory } from "react-router";

export function RegisterScreen() {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [register, setRegister] = useState(false);
  const [error, setError] = useState();

  const imcApi = useImcApi();
  const history = useHistory();

  function handleChange(name, text) {
    setFormInput({ ...formInput, [name]: text });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setRegister(true);
    const { name, email, password } = formInput;
    try {
      await imcApi.register(name, email, password);
      history.push(LOGIN);
    } catch (error) {
      setError(error.message);
      setRegister(false);
    }
  }

  function handleLogin() {
    history.push(LOGIN);
  }

  return (
    <div className="register__screen">
      <p className="register-screen__title">Cadastrar</p>
      <form
        className="login__screen_form"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <Input
          name="name"
          value={formInput["name"]}
          onChange={handleChange}
          placeholder="Nome"
          textalign={"left"}
          label={"Nome"}
        />
        <Input
          name="email"
          value={formInput["email"]}
          onChange={handleChange}
          placeholder="E-mail"
          textalign={"left"}
          label={"E-mail"}
          type={"email"}
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
        <Button
          color={"green"}
          onClick={handleSubmit}
          disabled={
            register ||
            Object.keys(formInput).some(
              (formInputKey) => formInput[formInputKey].length <= 0
            )
          }
        >
          {register ? "CADASTRANDO..." : "CADASTRAR"}
        </Button>
        <Button onClick={handleLogin}>LOGIN</Button>
      </form>
    </div>
  );
}
