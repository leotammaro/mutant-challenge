import { isMutant } from ".";
import { MUTANT, NON_MUTANT } from "./utils/constants/constants";

describe("isMutant", () => {
  it("should return true validating that its a mutant", () => {
    expect(isMutant(MUTANT)).toEqual(true);
  });
  it("should return false validating that its a not mutant", () => {
    expect(isMutant(NON_MUTANT)).toEqual(false);
  });
});
