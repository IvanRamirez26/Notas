import Notes from "./notes";

function App() {
  const notes = [
    {
      id: "1",
      title: "Title 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      color: ` #ebe2ff `,
      creationDate: "dd/mm/aaaa",
    },
    {
      id: "2",
      title: "Title 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      color: " #fce7c8",
      creationDate: "dd/mm/aaaa",
    },
    {
      id: "3",
      title: "Title 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      color: " #ffe3e3",
      creationDate: "dd/mm/aaaa",
    },
    {
      id: "4",
      title: "Title 4",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      color: " #d9e8ff",
      creationDate: "dd/mm/aaaa",
    },
    {
      id: "5",
      title: "Title 5",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      color: " #ffcff6",
      creationDate: "dd/mm/aaaa",
    },
  ];
  return <Notes notes={notes} />;
}

export default App;
