import { useLocalStorageState } from "ahooks";
import { Route, Routes } from "react-router-dom";

import CreateNotes from "./createNotes";
import EditNotes from "./editNotes";
import Notes from "./notes";
import { notesDataType } from "./notes/types";

function App() {
  const notes = [
    {
      id: 1,
      title: "Title 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      color: ` #ebe2ff `,
      creationDate: "dd/mm/aaaa",
    },
    {
      id: 2,
      title: "Title 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      color: " #fce7c8",
      creationDate: "dd/mm/aaaa",
    },
    {
      id: 3,
      title: "Title 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      color: " #ffe3e3",
      creationDate: "dd/mm/aaaa",
    },
    {
      id: 4,
      title: "Title 4",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      color: " #d9e8ff",
      creationDate: "dd/mm/aaaa",
    },
    {
      id: 5,
      title: "Title 5",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      color: " #ffcff6",
      creationDate: "dd/mm/aaaa",
    },
  ];
  const [myNotes] = useLocalStorageState<notesDataType[]>("notes", {
    defaultValue: notes,
  });

  return (
    <main>
      <Routes>
        <Route path="/notes" element={<Notes />} />
        <Route path="/edit-note/:id" element={<EditNotes />} />
        <Route path="/create-note" element={<CreateNotes />} />
        <Route path="*" element={<h1>🫥 404 🫥</h1>} />
      </Routes>
    </main>
  );
}

export default App;
