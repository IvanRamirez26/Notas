import { notesDataType } from "../notes/types";

export type ThumbnailNoteProps = {
  note: notesDataType;
  onDelete: (id: number) => void;
};
