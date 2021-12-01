import "./card-imc.style.css";
import {
  abaixo_peso,
  peso_normal,
  sobrepeso,
  obesidade_grau_i,
  obesidade_grau_ii,
  obesidade_grau_iii,
} from "../../../constants/classification.constants";
import { calcImc } from "../../../utils/imc";
import { ButtonDelete } from "..";

export function CardImc({ ...props }) {
  const { height, weight, date } = props;

  return (
    <div className="card">
      <div className="card__infos">
        <div className="infos">
          <label className="label_description">
            <strong>Data: </strong>
          </label>
          {date}
        </div>
        <div className="infos">
          <label className="label_description">
            <strong>Altura: </strong>
          </label>
          {height.toFixed(2)} m
        </div>
        <div className="infos">
          <label className="label_description">
            <strong>Peso: </strong>
          </label>
          {weight.toFixed(2)} kg
        </div>
      </div>
      <div className="card__imc">
        <label className="label_description">
          <strong>IMC</strong>
        </label>
        {(weight / (height * height)).toFixed(2)}
        <label>{calcImc(height, weight) <= 18.5 ? abaixo_peso : ""}</label>
        <label>
          {calcImc(height, weight) > 18.5 && calcImc(height, weight) <= 24.9
            ? peso_normal
            : ""}
        </label>
        <label>
          {calcImc(height, weight) > 24.9 && calcImc(height, weight) <= 29.9
            ? sobrepeso
            : ""}
        </label>
        <label>
          {calcImc(height, weight) > 29.9 && calcImc(height, weight) <= 34.9
            ? obesidade_grau_i
            : ""}
        </label>
        <label>
          {calcImc(height, weight) > 34.9 && calcImc(height, weight) <= 39.9
            ? obesidade_grau_ii
            : ""}
        </label>
        <label>
          {calcImc(height, weight) > 39.9 ? obesidade_grau_iii : ""}
        </label>
      </div>
      <div className="btn_delete">
        <ButtonDelete color="red" {...props}>
          X
        </ButtonDelete>
      </div>
    </div>
  );
}
