function resolverBhaskara(a, b, c) {
  const delta = b ** 2 - 4 * a * c;
  const x1 = ((-b + calculoRaiz(delta)) / (2 * a));
  const x2 = ((-b - calculoRaiz(delta)) / (2 * a));

  console.log(
    `Os valors de X dos pontos da parábola que cruza o eixo X são: ${x1} e ${x2}`
  );
}

function calculoRaiz(numBase) {
  return numBase ** (1 / 2);
}

resolverBhaskara(2, 3, -2);
//para fazer calculos de raizes, e so fazer n**(1/2)
