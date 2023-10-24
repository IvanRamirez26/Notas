import { useEffect, useState } from "react";

import { useLocalStorageState } from "ahooks";
import { Button, ColorPicker, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Link, useParams } from "react-router-dom";

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
  console.log(id);
  const [open, setOpen] = useState(false);
  const [textInput, setTextInput] = useState("st");
  const [textArea, setTextArea] = useState("");
  const [colorNote, setColorNote] = useState<string>("#ffffff");
  const [myNotes] = useLocalStorageState<notesDataType[]>("notes");
  console.log("edit 27", myNotes);

  useEffect(() => {
    if (myNotes) {
      console.log(myNotes.find((note) => note.id == id));
    }
  }, [id, myNotes]);

  const handelClickSave = () => {
    setTextInput("");
    setTextArea("");
    setColorNote("#ffffff");
    console.log(textInput);
    console.log(textArea);
    console.log(`${colorNote}`);
  };

  return (
    <div>
      <Link to="/notes">
        <Button icon={<FontAwesomeIcon icon={faXmark} />}>Cancel </Button>
      </Link>
      <Styled.EditForm $color={colorNote}>
        <h2
          style={{
            margin: "0px",
            gap: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Edit Form
          {<FontAwesomeIcon icon={faNoteSticky} />}
        </h2>
        <Styled.Input>
          <Styled.Label>Title:</Styled.Label>
          <Input
            style={{ backgroundColor: "transparent", fontWeight: "bold" }}
            onChange={(e) => setTextInput(e.target.value)}
            type="text"
            placeholder="Edit your title :)"
            value={textInput}
          />
        </Styled.Input>
        <Styled.TextArea>
          <Styled.Label>Text:</Styled.Label>
          <TextArea
            style={{ backgroundColor: "transparent" }}
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
    </div>
  );
};
export default EditNotes;
