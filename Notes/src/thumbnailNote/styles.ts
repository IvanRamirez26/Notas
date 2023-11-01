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
    display: contents;
    flex-wrap: wrap;
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

    .custom-button:hover {
      background-color: #cf112d;
    }
    .custom-button2:hover {
      background-color: #76b9ff;
    }
    :where(.css-dev-only-do-not-override-3mqfnx).ant-btn-default:not(
        :disabled
      ):not(.ant-btn-disabled):hover {
      color: #fff;
      border-color: #fff;
    }
  `,
  Note: styled.div<{ $color: string }>`
    padding: 15px;
    padding-top: 10px;
    border-radius: 0px 0px 10px 10px;
    width: 251px; //198px;
    height: auto;
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
    width: 255px; //302px;
    height: auto;
    align-items: center;
    display: flex;
    ${(props) => {
      if (props.$color) {
        return `background-color:${props.$color}`;
      }
    }}
  `,
  P: styled.div`
    color: lightgrey;
    display: flex;
    align-self: flex-end;
    margin-top: 15px;
    margin-bottom: 0px;
  `,
};
export default Styled;
