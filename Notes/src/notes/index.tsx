import { useLocalStorageState } from "ahooks";

import NavigationBar from "../navigationBar";
import { notesDataType } from "../notes/types";
import RowNotes from "../rowNotes";

const Notes = () => {
  const [notes, setNotes] = useLocalStorageState<notesDataType[]>("notes");
  const matrix = notes?.reduce(
    (
      accumulator: {
        id: number;
        title: string;
        text: string;
        color: string;
        creationDate: string;
      }[][],
      currentElement,
      index
    ) => {
      const currentGroupIndex = Math.floor(index / 4);
      if (!accumulator[currentGroupIndex]) {
        accumulator[currentGroupIndex] = [];
      }
      accumulator[currentGroupIndex].push(currentElement);

      return accumulator;
    },
    []
  );
  const handelClickDelete = (id: number) => {
    console.log(id);
    const deleteNotes = notes?.filter((note) => {
      return note.id !== id;
    });

    setNotes(deleteNotes);
  };

  return (
    <div>
      <NavigationBar />
      {matrix?.map((note) => {
        return (
          <RowNotes onDelete={handelClickDelete} columns={note}></RowNotes>
        );
      })}
    </div>
  );
};
export default Notes;
