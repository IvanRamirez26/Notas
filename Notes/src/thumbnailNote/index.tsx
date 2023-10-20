import { Button } from "antd";
import { useNavigate } from "react-router-dom";

import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Styled from "./styles";
import type { ThumbnailNoteProps } from "./types";

const ThumbnailNote = ({ note }: ThumbnailNoteProps) => {
  const history = useNavigate();
  const handelClickEditNote = () => {
    history("/edit-note/" + note.id);
    return;
  };

  return (
    <Styled.NoteContainer>
      <Styled.NoteHead $color={note.color}>
        <Styled.Title>{note.title}</Styled.Title>
      </Styled.NoteHead>
      <Styled.Note $color={note.color}>
        <Styled.Text>{note.text}</Styled.Text>
      </Styled.Note>
      <Styled.Buttons>
        <Button
          icon={<FontAwesomeIcon icon={faPen} />}
          onClick={handelClickEditNote}
        ></Button>

        <Button icon={<FontAwesomeIcon icon={faTrash} />}></Button>
      </Styled.Buttons>
    </Styled.NoteContainer>
  );
};
export default ThumbnailNote;
