import styled from "styled-components";

const Styled = {
  Title: styled.div`
    font-size: 20px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    margin-bottom: 5px;
  `,
  Text: styled.div`
    font-size: 14px;
    color: gray;
    font-family: "Arial Narrow", Arial, sans-serif;
  `,
  NoteContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 35px;
    margin-top: 35px;
  `,
  Buttons: styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
  `,
  Note: styled.div<{ $color: string }>`
    border: solid 1px lightgrey;
    padding: 15px;
    border-radius: 10px 0px 10px 0px;
    width: 200px;
    height: 150px;
    margin-bottom: 5px;
    ${(props) => {
      if (props.$color) {
        return `background-color:${props.$color}`;
      }
    }}
  `,
};
export default Styled;
