import styled from "styled-components";

const Styled = {
  Title: styled.div`
    font-size: 20px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
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
    padding: 15px;
    padding-top: 10px;
    border-radius: 0px 0px 10px 10px;
    width: 198px;
    height: 120px;
    margin-bottom: 5px;
    border-bottom: solid 7px lightgrey;
    border-left: solid 2px lightgrey;
    border-right: solid 2px lightgrey;
    border-top: none;
    ${(props) => {
      if (props.$color) {
        return `border-color:${props.$color}`;
      }
    }}
  `,
  NoteHead: styled.div<{ $color: string }>`
    padding: 15px;
    border-radius: 10px 10px 0px 0px;
    width: 202px;
    height: 15px;
    align-items: center;
    display: flex;
    ${(props) => {
      if (props.$color) {
        return `background-color:${props.$color}`;
      }
    }}
  `,
};
export default Styled;
