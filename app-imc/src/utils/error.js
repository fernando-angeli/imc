export function verifyError(error) {
  if (error === "Request failed with status code 400")
    return "Erro de preenchimento de campos";
}
