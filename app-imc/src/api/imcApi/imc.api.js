import { useMemo } from "react";
import { useHttp } from "../__base/use-http";

export const useImcApi = () => {
  const httpInstance = useHttp("http://localhost:8090/api-imc/");

  const login = async (email, password) => {
    const response = await httpInstance.post("publico/login", {
      email,
      password,
    });
    return response;
  };

  const register = async (name, email, password) => {
    const response = await httpInstance.post("publico/cadastro", {
      name,
      email,
      password,
    });
    return response;
  };

  const registerMeasurement = async (date, height, weight, user_id) => {
    const response = await httpInstance.post("privado/usuario/medicao", {
      date,
      height,
      weight,
      user_id,
    });
    return response;
  };

  const getMeasurement = async (id) => {
    const response = await httpInstance.get(`privado/usuario/medicao/${id}`, {
      id,
    });
    return response;
  };

  const cancelMeasurement = async (id) => {
    const response = await httpInstance._delete(
      `privado/usuario/medicao/${id}`,
      {
        id,
      }
    );
    return response;
  };

  return useMemo(
    () => ({
      register,
      login,
      registerMeasurement,
      getMeasurement,
      cancelMeasurement,
    }),
    []
  );
};
