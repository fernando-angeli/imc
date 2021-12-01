export function calcImc(height, weight) {
  return weight / (height * height).toFixed(2);
}
