import { Button } from "antd";
import { Link } from "react-router-dom";

import { faNoteSticky, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Styled from "./styles";

const NavigationBar = () => {
  return (
    <>
      <Styled.NavBar>
        <Link to="/notes">
          <Button icon={<FontAwesomeIcon icon={faNoteSticky} />}>Notes</Button>
        </Link>

        <Link to="/create-note">
          <Button icon={<FontAwesomeIcon icon={faPlus} />}>Create Note</Button>
        </Link>
      </Styled.NavBar>
    </>
  );
};
export default NavigationBar;
