export type NotesProps = {
  notes: notesDataType[];
};
export type notesDataType = {
  id: number;
  title: string;
  text: string;
  color: string;
  creationDate: string;
};
