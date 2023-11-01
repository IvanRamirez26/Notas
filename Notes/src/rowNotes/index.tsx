import { Col, Row } from "antd";

import ThumbnailNote from "../thumbnailNote";
import { RowNotesProps } from "./types";

const RowNotes = ({ columns, onDelete }: RowNotesProps) => {
  return (
    <Row>
      {columns.map((column) => {
        return (
          <Col xs={24} sm={24} md={12} lg={6} xl={6} key={column.id}>
            <ThumbnailNote onDelete={onDelete} note={column}></ThumbnailNote>
          </Col>
        );
      })}
    </Row>
  );
};
export default RowNotes;
