/**
 * Given a string array representing a DNA sequence, returns a 2D
 * array where each sub-array represents a row in the matrix.
 *
 * @param {string[]} mutant - DNA sequence.
 * @returns {string[][]} - 2D array representing the matrix.
 */
export const convertMutantToMatrix = (mutant: string[]): string[][] => {
  return mutant.map((row) => row.split(""));
};

/**
 * Validates if the given rows and columns represent a human DNA sequence.
 * A valid human DNA sequence matrix must have equal length of rows and columns,
 * and both dimensions must be at least 4 in size.
 *
 * @param {string[][]} rows - 2D array representing the rows of the DNA sequence.
 * @param {string[][]} columns - 2D array representing the columns of the DNA sequence.
 * @returns {boolean | Error} - Returns true if valid, otherwise throws an error.
 */
export const validateIfIsHuman = (
  rows: string[][],
  columns: string[][]
): boolean | Error => {
  if (rows.length !== columns.length || rows.length < 4 || columns.length < 4) {
    throw new Error("Its not human");
  }

  return true;
};

/**
 * Checks if there are at least four equal consecutive letters in the given DNA sequence.
 *
 * @param {string[]} mutant - DNA sequence.
 * @returns {boolean} - Returns true if there are at least four equal consecutive letters, otherwise returns false.
 */
export const hasIndenticalLetters = (mutant: string[]): boolean => {
  for (let i = 0; i < mutant.length - 3; i++) {
    if (
      mutant[i] === mutant[i + 1] &&
      mutant[i] === mutant[i + 2] &&
      mutant[i] === mutant[i + 3]
    ) {
      return true;
    }
  }
  return false;
};
