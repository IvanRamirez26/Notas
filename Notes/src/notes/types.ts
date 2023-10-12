export type NotesProps = {
  notes: notesDataType[];
};
export type notesDataType = {
  id: string;
  title: string;
  text: string;
  color: string;
  creationDate: string;
};
