/**
 * Given a matrix, returns an array of arrays, where each sub-array
 * is a column of the matrix.
 *
 * @param {string[][]} matrix
 * @returns {string[][]}
 */
export const getColumns = (matrix: string[][]): string[][] => {
  return matrix[0].map((_, i) => matrix.map((row) => row[i]));
};
