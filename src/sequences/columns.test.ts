import { getColumns } from "./columns";

describe("getColumns", () => {
  it("should return the columns of the matrix", () => {
    const matrix = [
      ["A", "B", "C"],
      ["D", "E", "F"],
      ["G", "H", "I"],
    ];
    const columns = [
      ["A", "D", "G"],
      ["B", "E", "H"],
      ["C", "F", "I"],
    ];
    expect(getColumns(matrix)).toEqual(columns);
  });
});
