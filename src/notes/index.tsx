import { useMemo, useState } from "react";

import { useLocalStorageState } from "ahooks";
import { orderBy } from "lodash";

import NavigationBar from "../navigationBar";
import { notesDataType } from "../notes/types";
import RowNotes from "../rowNotes";

/**
yarn add react-quill
 * 
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
 */

const Notes = () => {
  const [notes, setNotes] = useLocalStorageState<notesDataType[]>("notes");
  const [searchResults, setSearchResults] = useState<notesDataType[]>([]); // notas que coinciden
  const [searchText, setSearchText] = useState("");
  const notesToSearch = notes;
  const [selectOption, setSelectOption] = useState<string>("");
  const [orderState, setOrderState] = useState<"desc" | "asc">("desc");

  const matrix = useMemo(() => {
    // TRUCO: se necesita un return si o si, tambien necesita dependencias
    // funciona igual que el use effect
    let noteItems = [];
    if (searchText) {
      noteItems = searchResults;
    } else {
      noteItems = notes || [];
    }
    return noteItems?.reduce(
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
  }, [notes, searchResults, searchText]);

  const handelClickDelete = (id: number) => {
    const deleteNotes = notes?.filter((note) => {
      return note.id !== id;
    });
    setNotes(deleteNotes);
  };
  const handleSortingChange = (value: string) => {
    setSelectOption(value);
    setNotes(orderBy(notes, [value]));
  };
  const handleOrderClick = () => {
    setOrderState((prev) => (prev === "asc" ? "desc" : "asc"));
    setNotes(orderBy(notes, [selectOption], orderState));
  };

  const handleSearch = (value: string) => {
    console.log("searchText", value);
    console.log("searchResult", searchResults);
    setSearchText(value);
    if (value) {
      const searchNotes = notesToSearch?.filter((note) =>
        note.title.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(searchNotes || []);
    } else {
      setSearchResults(notes || []);
    }
  };

  return (
    <div>
      <NavigationBar
        onSortingChange={handleSortingChange}
        onOrderClick={handleOrderClick}
        orderState={orderState}
        onSearch={handleSearch}
        setSearchText={setSearchText}
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