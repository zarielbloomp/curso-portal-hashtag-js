function calculateaSquareRoot(radicant) {
  return radicant ** (1 / 2);
}

function calculatePythagoras(side1, side2) {
  const sum = side1 ** 2 + side2 ** 2;
  return calculateaSquareRoot(sum);
}

console.log(`A hiponesusa de um triangulo de lados 3 e 4 è ${calculatePythagoras(3,4)}`);
