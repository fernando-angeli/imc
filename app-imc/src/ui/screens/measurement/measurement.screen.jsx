import "./measurement.style.css";
import { useState } from "react";
import { useHistory } from "react-router";
import { useImcApi } from "../../../api/imcApi/imc.api";
import { useGlobalUser } from "../../../context/user.context";
import { Input, Button, Container } from "../../component";
import { HOME } from "../../../constants/routes.constants";
import { verifyError } from "../../../utils/error";

export function MeasurementScreen() {
  const [formInput, setFormInput] = useState({
    date: "",
    height: "",
    weight: "",
  });
  const [register, setRegister] = useState(false);
  const [error, setError] = useState();
  const [globalUser] = useGlobalUser();

  const imcApi = useImcApi();
  const history = useHistory();

  function handleChange(name, text) {
    setFormInput({ ...formInput, [name]: text });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setRegister(true);
    const { date, height, weight } = formInput;
    const user_id = globalUser.user.id;
    try {
      await imcApi.registerMeasurement(date, height, weight, user_id);
      history.push(HOME);
    } catch (error) {
      setError(error.message);
      setRegister(false);
    }
  }

  function handleHome() {
    history.push(HOME);
  }

  return (
    <Container>
      <div className="measurement__screen">
        <p className="register-screen__title">Verificar IMC do dia</p>
        <form
          className="measurement__screen_form"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <Input
            name="date"
            value={formInput["date"]}
            onChange={handleChange}
            label={"Data"}
            type={"date"}
          />
          <Input
            name="weight"
            value={formInput["weight"]}
            onChange={handleChange}
            placeholder="Peso"
            textalign={"left"}
            label={"Peso"}
            mask={"99.99"}
          />
          <Input
            name="height"
            value={formInput["height"]}
            onChange={handleChange}
            placeholder="Altura"
            textalign={"left"}
            label={"Altura"}
            mask={"9.99"}
          />
          {error && (
            <label className="form__error_text">{verifyError(error)}</label>
          )}
          <div className="form__btn">
            <Button
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
            <Button onClick={handleHome}>VOLTAR HOME</Button>
          </div>
        </form>
      </div>
    </Container>
  );
}
