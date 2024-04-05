export function embaralhar(numeros: any[]): any[] {
  return numeros.map(valor => ({ valor, aleatorio: Math.random() }))
  .sort((obj1, obj2) => obj1.aleatorio - obj2.aleatorio).map(obj => obj.valor)
}