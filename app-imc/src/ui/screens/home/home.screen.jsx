import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useImcApi } from "../../../api/imcApi/imc.api";
import { MEASUREMENT } from "../../../constants/routes.constants";
import { useGlobalUser } from "../../../context/user.context";
import { Loader, Button, Container } from "../../component";
import { CardImc } from "../../component/card-imc/card-imc.component";
import { calcImc } from "../../../utils/imc";
import "./home.style.css";

export function HomeScreen() {
  const [globalUser] = useGlobalUser();
  const [measurements, setMeasurements] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const imcApi = useImcApi();
  const history = useHistory();

  async function getMeasurements(id) {
    setLoading(true);
    try {
      const response = await imcApi.getMeasurement(id);
      setMeasurements(response);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    getMeasurements(globalUser.user.id);
  }, [imcApi]);

  async function handleDelete(id) {
    setLoading(true);
    try {
      await imcApi.cancelMeasurement(id);
      setLoading(false);
      setError(false);
      getMeasurements(globalUser.user.id);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  function handleMeasurements() {
    history.push(MEASUREMENT);
  }

  function averageImc() {
    let accumulatorImc = 0;
    measurements.map(
      (measurement) =>
        (accumulatorImc += calcImc(measurement.height, measurement.weight))
    );
    return (accumulatorImc / measurements.length).toFixed(2);
  }

  function averageWeight() {
    let accumulatorWeight = 0;
    measurements.map(
      (measurement) => (accumulatorWeight += measurement.weight)
    );
    return (accumulatorWeight / measurements.length).toFixed(2);
  }

  function renderInfosUser() {
    return (
      <div className="infos_user">
        <p>
          <strong>IMC</strong> médio: {averageImc()} %
        </p>
        <p>
          <strong>Peso</strong> médio: {averageWeight()} kg
        </p>
      </div>
    );
  }

  return (
    <Container>
      <div className="home">
        <p className="register-screen__title">{`Olá ${globalUser.user.name}`}</p>
        {measurements.length === 0 ? "" : renderInfosUser()}
        {loading && <Loader style={{ margin: "0 auto", marginTop: "10px" }} />}
        <div>
          {measurements.length === 0 ? <p>Nenhuma medição registrada</p> : ""}
        </div>
        <div className="cards__imc">
          {!!measurements &&
            measurements.map((measurement) => (
              <CardImc
                key={measurement.id}
                height={measurement.height}
                weight={measurement.weight}
                date={measurement.date}
                onClick={() => handleDelete(measurement.id)}
              />
            ))}
        </div>
        {error && <label className="form__error_text">{error}</label>}
        <div className="btn">
          <Button onClick={handleMeasurements}>MEDIÇÕES</Button>
        </div>
      </div>
    </Container>
  );
}
