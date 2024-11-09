import { getRows } from "./sequences/rows";
import { getColumns } from "./sequences/columns";
import { getDiagonals } from "./sequences/diagonals";
import {
  convertMutantToMatrix,
  hasIndenticalLetters,
  validateIfIsHuman,
} from "./utils/utils";

/**
 * Given a string array representing a DNA sequence, returns true if the given
 * sequence is a mutant, otherwise returns false.
 *
 * A mutant is a sequence that has at least two equal consecutive letters in
 * any direction (horizontal, vertical or diagonal).
 *
 * @param {string[]} mutant - DNA sequence.
 * @returns {boolean} - Returns true if the sequence is a mutant, otherwise returns false.
 */
export function isMutant(dna: string[]): boolean {
  const matrix = convertMutantToMatrix(dna);
  const MIN_SEQUENCE_TO_BE_MUTANT = 2;
  const rows = getRows(matrix);
  const columns = getColumns(matrix);

  validateIfIsHuman(rows, columns);

  const diagonals = getDiagonals(matrix);
  let totalOfSequences = 0;

  for (let i = 0; i < dna.length; i++) {
    if (
      hasIndenticalLetters(rows[i]) ||
      hasIndenticalLetters(columns[i]) ||
      hasIndenticalLetters(diagonals[i])
    ) {
      totalOfSequences += 1;

      if (totalOfSequences >= MIN_SEQUENCE_TO_BE_MUTANT) {
        return true;
      }
    }
  }
  return false;
}
