import { useEffect, useState } from "react";

import { useLocalStorageState } from "ahooks";
import { Button, ColorPicker, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Link, useNavigate, useParams } from "react-router-dom";

import { DownOutlined } from "@ant-design/icons";
import {
  faFloppyDisk,
  faNoteSticky,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { notesDataType } from "../notes/types";
import Styled from "./styles";

const EditNotes = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [textArea, setTextArea] = useState("");
  const [colorNote, setColorNote] = useState<string>("#ffffff");
  const [myNotes, setMyNotes] = useLocalStorageState<notesDataType[]>("notes");
  const history = useNavigate();
  useEffect(() => {
    if (myNotes) {
      // esto combierte el id de string a number para poderla usar
      const numberId = Number(id);
      //                            aqui se usa
      const a = myNotes.find((note) => note.id == numberId);
      setTextInput(a?.title || "");
      setTextArea(a?.text || "");
      setColorNote(a?.color || "");
    }
  }, [id, myNotes]);

  const handelClickSave = () => {
    const numberId = Number(id);
    history("/notes/");
    setTextInput("");
    setTextArea("");
    setColorNote("#ffffff");
    setMyNotes(
      myNotes?.map((note) => {
        if (note.id == numberId) {
          return {
            ...note,
            title: textInput,
            text: textArea,
            color: colorNote,
          };
        }
        return note;
      })
    );
  };

  return (
    <Styled.Container>
      <Link to="/notes">
        <Button icon={<FontAwesomeIcon icon={faXmark} />}>Cancel </Button>
      </Link>
      <Styled.EditForm $color={colorNote}>
        <Styled.H2>
          <span>Create Note</span>
          {<FontAwesomeIcon icon={faNoteSticky} />}
        </Styled.H2>
        <Styled.Input>
          <Styled.Label>Title:</Styled.Label>
          <Input
            onChange={(e) => setTextInput(e.target.value)}
            placeholder="Edit your title :)"
            value={textInput}
          />
        </Styled.Input>
        <Styled.TextArea>
          <Styled.Label>Text:</Styled.Label>
          <TextArea
            onChange={(e) => setTextArea(e.target.value)}
            placeholder="Edit the body of your note :)"
            value={textArea}
          />
        </Styled.TextArea>
        <Styled.Footer>
          <ColorPicker
            value={colorNote}
            onChangeComplete={(color) => {
              setColorNote(color.toHexString());
            }}
            open={open}
            onOpenChange={setOpen}
            showText={() => (
              <DownOutlined
                rotate={open ? 180 : 0}
                onClick={undefined}
                style={{
                  color: "rgba(0, 0, 0, 0.25)",
                }}
              />
            )}
          />
          <Styled.Button>
            <Button
              icon={<FontAwesomeIcon icon={faFloppyDisk} />}
              onClick={handelClickSave}
            >
              Save Changes
            </Button>
          </Styled.Button>
        </Styled.Footer>
      </Styled.EditForm>
    </Styled.Container>
  );
};
export default EditNotes;
