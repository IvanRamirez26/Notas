import { Button, Popconfirm } from "antd";
import { useNavigate } from "react-router-dom";

import { QuestionCircleOutlined } from "@ant-design/icons";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Styled from "./styles";
import type { ThumbnailNoteProps } from "./types";

const ThumbnailNote = ({ note, onDelete }: ThumbnailNoteProps) => {
  const history = useNavigate();
  const handelClickEditNote = () => {
    history("/edit-note/" + note.id);
    return;
  };
  // <Styled.NoteContainer> </Styled.NoteContainer>
  return (
    <Styled.NoteContainer>
      <Styled.NoteHead $color={note.color}>
        <Styled.Title>{note.title}</Styled.Title>
      </Styled.NoteHead>
      <Styled.Note $color={note.color}>
        <Styled.Text>{note.text}</Styled.Text>
        <Styled.P>Creation Date: {note.creationDate}</Styled.P>
      </Styled.Note>
      <Styled.Buttons>
        <Button
          icon={<FontAwesomeIcon icon={faPen} />}
          onClick={handelClickEditNote}
          className="custom-button2"
        ></Button>
        <Popconfirm
          placement="rightTop"
          title="Delete the note"
          description="Are you sure to delete this note?"
          icon={<QuestionCircleOutlined style={{ color: "red" }} />}
          onConfirm={() => onDelete(note.id)}
        >
          <Button
            icon={<FontAwesomeIcon icon={faTrash} />}
            className="custom-button"
          ></Button>
        </Popconfirm>
      </Styled.Buttons>
    </Styled.NoteContainer>
  );
};
export default ThumbnailNote;

/**
 {searchResults?.length > 0 ? (<div>{searchResults.map(()=>())}</div>
  ) : ( <div>
  <p>🫥 No se encontraron notas que coincidan con la búsqueda 🫥.</p>
  </div>

  <div> 
  {searchResults?.length > 0 ? (<div>{searchResults.map((note)=>(<div key={note.id}><Styled.NoteContainer>
      <Styled.NoteHead $color={note.color}>
        <Styled.Title>{note.title}</Styled.Title>
      </Styled.NoteHead>
      <Styled.Note $color={note.color}>
        <Styled.Text>{note.text}</Styled.Text>
        <Styled.P>Creation Date: {note.creationDate}</Styled.P>
      </Styled.Note>
      <Styled.Buttons>
        <Button
          icon={<FontAwesomeIcon icon={faPen} />}
          onClick={handelClickEditNote}
          className="custom-button2"
        ></Button>
        <Popconfirm
          placement="rightTop"
          title="Delete the note"
          description="Are you sure to delete this note?"
          icon={<QuestionCircleOutlined style={{ color: "red" }} />}
          onConfirm={() => onDelete(note.id)}
        >
          <Button
            icon={<FontAwesomeIcon icon={faTrash} />}
            className="custom-button"
          ></Button>
        </Popconfirm>
      </Styled.Buttons>
    </Styled.NoteContainer>
)}</div>))}</div>)
:
(<div><p>🫥 No se encontraron notas que coincidan con la búsqueda 🫥.</p></div>)}
</div>

    <Styled.NoteContainer>
      <Styled.NoteHead $color={note.color}>
        <Styled.Title>{note.title}</Styled.Title>
      </Styled.NoteHead>
      <Styled.Note $color={note.color}>
        <Styled.Text>{note.text}</Styled.Text>
        <Styled.P>Creation Date: {note.creationDate}</Styled.P>
      </Styled.Note>
      <Styled.Buttons>
        <Button
          icon={<FontAwesomeIcon icon={faPen} />}
          onClick={handelClickEditNote}
          className="custom-button2"
        ></Button>
        <Popconfirm
          placement="rightTop"
          title="Delete the note"
          description="Are you sure to delete this note?"
          icon={<QuestionCircleOutlined style={{ color: "red" }} />}
          onConfirm={() => onDelete(note.id)}
        >
          <Button
            icon={<FontAwesomeIcon icon={faTrash} />}
            className="custom-button"
          ></Button>
        </Popconfirm>
      </Styled.Buttons>
    </Styled.NoteContainer>
*/
