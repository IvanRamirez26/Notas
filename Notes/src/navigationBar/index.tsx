import { Button } from "antd";
import { Link } from "react-router-dom";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Styled from "./styles";

const NavigationBar = () => {
  return (
    <>
      <Styled.NavBar>
        <Button>
          <Link to="/notes">Notes </Link>
        </Button>

        <Button icon={<FontAwesomeIcon icon={faPlus} />}>
          <Link to="/create-note">Create Note</Link>
        </Button>
      </Styled.NavBar>
    </>
  );
};
export default NavigationBar;

/*<Button>
<Link to="/edit-note">Edit Notes </Link>
</Button>*/
