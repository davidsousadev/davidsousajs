export default function somar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Os parâmetros precisam ser números');
  }
  return a + b;
}