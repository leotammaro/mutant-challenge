import { COLUMNS, HUMAN, ROWS } from "./constants/constants";
import { validateIfIsHuman, convertMutantToMatrix } from "./utils";

describe("utils", () => {
  describe("convertMutantToMatrix", () => {
    it("should convert an array of string to matrix", () => {
      const matrix = [
        ["A", "S", "G", "A", "G", "A"],
        ["A", "S", "G", "A", "G", "A"],
        ["A", "S", "G", "A", "G", "A"],
        ["A", "S", "G", "A", "G", "A"],
        ["A", "S", "G", "A", "G", "A"],
        ["A", "S", "G", "A", "G", "A"],
      ];
      expect(convertMutantToMatrix(HUMAN)).toEqual(matrix);
    });
  });
  describe("validateIfIsHuman", () => {
    it("should return true if its a human", () => {
      expect(validateIfIsHuman(ROWS, COLUMNS)).toEqual(true);
    });
    it("should throw error if its not a human", () => {
      expect(() => {
        validateIfIsHuman([], []);
      }).toThrow("Its not human");
    });
  });
});
