function calculateFibonnaci(termNumber) {
  let lastTerm = 1;
  let secontToLast = 0;

  if (termNumber === 0) {
    return 0;
  }

  if (termNumber === 1) {
    return 1;
  }

  let currentIteration = 2;
  while (currentIteration <= termNumber) {
    let auxVar = lastTerm + secontToLast;
    secontToLast = lastTerm;
    lastTerm = auxVar;
    currentIteration++;
  }
  return lastTerm;
}
console.log(`O valor numero 6 da sequencia e ${calculateFibonnaci(6)}`);