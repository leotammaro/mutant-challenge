import { getColumns } from "../../sequences/columns";
import { getRows } from "../../sequences/rows";

export const EXTENDED_MATRIX = [
  ["A", "B", "C", "A", "B"],
  ["D", "E", "F", "B", "C"],
  ["G", "H", "I", "C", "D"],
  ["G", "H", "I", "C", "F"],
  ["G", "H", "I", "C", "F"],
];

export const COMMON_MATRIX = [
  ["A", "B", "C", "A"],
  ["D", "E", "F", "B"],
  ["G", "H", "I", "C"],
  ["G", "H", "I", "C"],
];

export const HUMAN = [
  "ASGAGA",
  "ASGAGA",
  "ASGAGA",
  "ASGAGA",
  "ASGAGA",
  "ASGAGA",
];

export const MUTANT = [
  "ABTTTT",
  "ABTTTT",
  "ABTTTT",
  "ABTTTT",
  "ABTTTT",
  "ABTTTT",
];

export const NON_MUTANT = [
  "AgTSTX",
  "AhwSTT",
  "AkTTXx",
  "ABTSTG",
  "ABvSTT",
  "ABTSTT",
];

export const ROWS = getRows(COMMON_MATRIX);
export const COLUMNS = getColumns(COMMON_MATRIX);
