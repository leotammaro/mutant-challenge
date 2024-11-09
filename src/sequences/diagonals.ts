const MIN_DIAGONAL_LENGTH = 4;
/**
 * Given an accumulator and a matrix, adds all possible diagonals from the
 * top-left to the bottom-right of the matrix to the accumulator, if the
 * length of the diagonal is greater or equal to MIN_DIAGONAL_LENGTH.
 * @param {string[][]} accumulator - Accumulator to store the diagonals.
 * @param {string[][]} matrix - Matrix to get the diagonals from.
 * @returns {string[][]} - The accumulator with the added diagonals.
 */
export const getDiagonalsFromTopRightToBottomLeft = (
  accumulator: string[][],
  matrix: string[][]
): string[][] => {
  const MATRIX_SIZE = matrix.length;
  const TOTAL_POSSIBLE_DIAGONALS = 2 * MATRIX_SIZE - 1;

  for (
    let diagonalIndex = 0;
    diagonalIndex < TOTAL_POSSIBLE_DIAGONALS;
    diagonalIndex++
  ) {
    const currentDiagonal: string[] = [];

    for (let row = 0; row < MATRIX_SIZE; row++) {
      const col = diagonalIndex - row;

      if (col >= 0 && col < MATRIX_SIZE) {
        currentDiagonal.push(matrix[row][col]);
      }
    }

    if (currentDiagonal.length >= MIN_DIAGONAL_LENGTH) {
      accumulator.push(currentDiagonal);
    }
  }
  return accumulator;
};

/**
 * Given an accumulator and a matrix, adds all possible diagonals from the
 * top-right to the bottom-left of the matrix to the accumulator, if the
 * length of the diagonal is greater or equal to MIN_DIAGONAL_LENGTH.
 * @param {string[][]} accumulator - Accumulator to store the diagonals.
 * @param {string[][]} matrix - Matrix to get the diagonals from.
 * @returns {string[][]} - The accumulator with the added diagonals.
 */
export const getDiagonalsFromTopLeftToBottomRight = (
  accumulator: string[][],
  matrix: string[][]
): string[][] => {
  const MATRIX_SIZE = matrix.length;
  const TOTAL_POSSIBLE_DIAGONALS = 2 * MATRIX_SIZE - 1;

  for (
    let diagonalIndex = 0;
    diagonalIndex < TOTAL_POSSIBLE_DIAGONALS;
    diagonalIndex++
  ) {
    const currentDiagonal: string[] = [];

    for (let row = 0; row < MATRIX_SIZE; row++) {
      const col = diagonalIndex - (MATRIX_SIZE - 1 - row);

      if (col >= 0 && col < MATRIX_SIZE) {
        currentDiagonal.push(matrix[row][col]);
      }
    }

    if (currentDiagonal.length >= MIN_DIAGONAL_LENGTH) {
      accumulator.push(currentDiagonal);
    }
  }
  return accumulator;
};

/**
 * Given a matrix, returns an array of arrays, where each sub-array is a
 * diagonal of the matrix, from top-left to bottom-right, and from
 * top-right to bottom-left, if the length of the diagonal is greater or
 * equal to MIN_DIAGONAL_LENGTH.
 *
 * @param {string[][]} matriz - Matrix to get the diagonals from.
 * @returns {string[][]} - The array of diagonals.
 */
export const getDiagonals = (matriz: string[][]): string[][] => {
  const diagonals: string[][] = [];
  getDiagonalsFromTopLeftToBottomRight(diagonals, matriz);
  getDiagonalsFromTopRightToBottomLeft(diagonals, matriz);

  return diagonals;
};
