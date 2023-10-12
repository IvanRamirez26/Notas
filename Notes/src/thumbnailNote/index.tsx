import { Button } from "antd";

import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Styled from "./styles";
import type { ThumbnailNoteProps } from "./types";

const ThumbnailNote = ({ note }: ThumbnailNoteProps) => {
  return (
    <Styled.NoteContainer>
      <Styled.Note $color={note.color}>
        <Styled.Title>{note.title}</Styled.Title>
        <Styled.Text>{note.text}</Styled.Text>
      </Styled.Note>
      <Styled.Buttons>
        <Button icon={<FontAwesomeIcon icon={faPen} />}></Button>
        <Button icon={<FontAwesomeIcon icon={faTrash} />}></Button>
      </Styled.Buttons>
    </Styled.NoteContainer>
  );
};
export default ThumbnailNote;
