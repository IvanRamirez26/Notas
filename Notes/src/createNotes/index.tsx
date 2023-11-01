import { useState } from "react";

import { useLocalStorageState } from "ahooks";
import { Button, ColorPicker, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Link, useNavigate } from "react-router-dom";

import { DownOutlined } from "@ant-design/icons";
import {
  faFloppyDisk,
  faNoteSticky,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { notesDataType } from "../notes/types";
import Styled from "./styles";

const CreateNotes = () => {
  const [open, setOpen] = useState(false);
  const [colorNote, setColorNote] = useState<string>("#ffffff");
  const [textInput, setTextInput] = useState<string>("");
  const [textArea, setTextArea] = useState<string>("");
  const [myNotes, setMyNotes] = useLocalStorageState<notesDataType[]>("notes");
  const history = useNavigate();
  const currentDate = getDate();
  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }

  const handelClickCreate = () => {
    history("/notes/");
    const id = Math.floor(Math.random() * 100);
    const newNote = {
      title: textInput,
      text: textArea,
      color: colorNote,
      creationDate: currentDate,
      id: id,
    };
    setMyNotes([newNote, ...(myNotes || [])]);
    setTextInput("");
    setTextArea("");
    setColorNote("#ffffff");
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
            placeholder="Your title :)"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
        </Styled.Input>
        <Styled.TextArea>
          <Styled.Label>Text:</Styled.Label>
          <TextArea
            placeholder="The body of your note :)"
            value={textArea}
            onChange={(e) => setTextArea(e.target.value)}
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
              onClick={handelClickCreate}
            >
              Save
            </Button>
          </Styled.Button>
        </Styled.Footer>
      </Styled.EditForm>
    </Styled.Container>
  );
};
export default CreateNotes;
