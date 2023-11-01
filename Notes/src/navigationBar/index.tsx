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
      <Link to="/create-note">
        <Button icon={<FontAwesomeIcon icon={faPlus} />}>Create Note</Button>
      </Link>
      <Styled.Container>
        <Select
          onChange={onSortingChange}
          placeholder="Sort by"
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
              <FontAwesomeIcon icon={faArrowDownAZ} />
            ) : (
              <FontAwesomeIcon icon={faArrowDownZA} />
            )
          }
        />
      </Styled.Container>
    </Styled.NavBar>
  </>
);
export default NavigationBar;
