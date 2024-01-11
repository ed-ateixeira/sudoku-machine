// x x x
// x x x
// x x x

function singleMatrixGenerator(rowCount = 3, colCount = 3) {
  return Array.from({ length: rowCount }, () =>
    Array.from({ length: colCount }, () => null)
  );
}

function matrixOfMatrixGenerator(rowCount = 3, colCount = 3) {
  return Array.from({ length: rowCount }, () =>
    Array.from({ length: colCount }, () =>
      singleMatrixGenerator(rowCount, colCount)
    )
  );
}

function getRandomUniqueNumber() {
  const shuffledArray = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(
    () => 0.5 - Math.random()
  );

  console.log(shuffledArray);
}

function matrixGen(matrix = {}) {
  for (let x = 1; x < 4; x++) {
    for (let y = 1; y < 4; y++) {
      const position = `${x}${y}`;
      matrix[position] = null;
    }
  }

  return matrix;
}

function mappedMatrix() {
  const matrix = {};

  for (let x = 1; x < 4; x++) {
    for (let y = 1; y < 4; y++) {
      const position = `${x}${y}`;
      matrix[position] = matrixGen();
    }
  }

  return matrix;
}

console.log(mappedMatrix());

function fulfilledMatrixGenerator(onlyNumbers = true) {
  const rowCount = onlyNumbers ? 3 : 5;
  const colCount = onlyNumbers ? 3 : 5;

  const matrix = matrixOfMatrixGenerator(rowCount, colCount);
}
