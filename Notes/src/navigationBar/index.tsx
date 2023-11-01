import { Button, Select } from "antd";
import { Link } from "react-router-dom";

import {
  faArrowDownAZ,
  faArrowDownZA,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Styled from "./styles";
import { NavigationBarProps } from "./types";

const NavigationBar = ({
  onSortingChange,
  onOrderClick,
  orderState,
}: NavigationBarProps) => (
  <>
    <Styled.NavBar>
      <div style={{ gap: "5px", display: "flex" }}>
        <Link to="/create-note">
          <Button icon={<FontAwesomeIcon icon={faPlus} />}>Create Note</Button>
        </Link>
      </div>
      <div style={{ gap: "5px", display: "flex" }}>
        <Select
          onChange={onSortingChange}
          placeholder="Sort by"
          style={{ width: 120 }}
          options={[
            { value: "title", label: "Title" },
            { value: "text", label: "Text" },
            { value: "creationDate", label: "Creation Date" },
          ]}
        ></Select>

        <Button
          type="text"
          onClick={onOrderClick}
          icon={
            orderState === "desc" ? (
              <FontAwesomeIcon
                icon={faArrowDownAZ}
                style={{ fontSize: "17px" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faArrowDownZA}
                style={{ fontSize: "17px" }}
              />
            )
          }
        />
      </div>
    </Styled.NavBar>
  </>
);
export default NavigationBar;
