import { useState } from "react";

import { useLocalStorageState } from "ahooks";
import { orderBy } from "lodash";

import NavigationBar from "../navigationBar";
import { notesDataType } from "../notes/types";
import RowNotes from "../rowNotes";

const Notes = () => {
  const [notes, setNotes] = useLocalStorageState<notesDataType[]>("notes");
  const [selectOption, setSelectOption] = useState<string>("");
  const [orderState, setOrderState] = useState<"desc" | "asc">("desc");
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
    const deleteNotes = notes?.filter((note) => {
      return note.id !== id;
    });
    setNotes(deleteNotes);
  };

  const handleSortingChange = (value: string) => {
    const saveValue = value;
    setSelectOption(saveValue);
    setNotes(orderBy(notes, [value]));
  };

  const handleOrderClick = () => {
    setOrderState((prev) => (prev === "asc" ? "desc" : "asc"));
    setNotes(orderBy(notes, [selectOption], orderState));
  };

  return (
    <div>
      <NavigationBar
        onSortingChange={handleSortingChange}
        onOrderClick={handleOrderClick}
        orderState={orderState}
      />
      {matrix?.map((note) => {
        return (
          <RowNotes onDelete={handelClickDelete} columns={note}></RowNotes>
        );
      })}
    </div>
  );
};
export default Notes;
