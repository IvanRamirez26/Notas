import { useLocalStorageState } from "ahooks";

import NavigationBar from "../navigationBar";
import { notesDataType } from "../notes/types";
import RowNotes from "../rowNotes";

const Notes = () => {
  const [notes] = useLocalStorageState<notesDataType[]>("notes");
  const matrix = notes?.reduce(
    (
      accumulator: {
        id: string;
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

  return (
    <div>
      <NavigationBar />
      {matrix?.map((note) => {
        return <RowNotes columns={note}></RowNotes>;
      })}
    </div>
  );
};
export default Notes;
