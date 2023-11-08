import { notesDataType } from "../notes/types";

export type RowNotesProps = {
  columns: notesDataType[];
  onDelete: (id: number) => void;
};
