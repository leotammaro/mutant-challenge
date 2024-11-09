import {
  getDiagonalsFromTopLeftToBottomRight,
  getDiagonalsFromTopRightToBottomLeft,
} from "./diagonals";
import { COMMON_MATRIX, EXTENDED_MATRIX } from "../utils/constants/constants";

describe("getDiagonalsFromTopRightToBottomLeft", () => {
  let sequences: string[][] = [];
  beforeEach(() => {
    sequences = [];
  });
  it("should return diagonal arrays from matrix", () => {
    const DIAGONALS_EXPECTED = [["A", "E", "I", "C"]];

    expect(
      getDiagonalsFromTopLeftToBottomRight(sequences, COMMON_MATRIX)
    ).toEqual(DIAGONALS_EXPECTED);
  });

  it("should return matrix with 3 arrays with length 4", () => {
    const sequences: string[][] = [];

    const DIAGONALS_EXPECTED = [
      ["D", "H", "I", "C"],
      ["A", "E", "I", "C", "F"],
      ["B", "F", "C", "F"],
    ];
    expect(
      getDiagonalsFromTopLeftToBottomRight(sequences, EXTENDED_MATRIX).length
    ).toEqual(DIAGONALS_EXPECTED.length);
  });
});

describe("getDiagonalsFromTopLeftToBottomRight", () => {
  it("should return diagonal arrays from matrix", () => {
    const sequences: string[][] = [];
    const diagonalsExpected = [["A", "F", "H", "G"]];

    expect(
      getDiagonalsFromTopRightToBottomLeft(sequences, COMMON_MATRIX)
    ).toEqual(diagonalsExpected);
  });
});
