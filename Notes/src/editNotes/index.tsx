import { useParams } from "react-router-dom";

import NavigationBar from "../navigationBar";

const EditNotes = () => {
  let { id } = useParams();
  //TODO: renderizar el id
  console.log(id);

  return (
    <div>
      <NavigationBar />
      <h1>editar</h1>
    </div>
  );
};
export default EditNotes;
/**{Notes.map((note)=>{
        <li key={note.id}>{note.title}{note.text}</li>
})} */
