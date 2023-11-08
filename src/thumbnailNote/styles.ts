import styled from "styled-components";

const Styled = {
  Title: styled.div`
    font-size: 20px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    white-space: nowrap; // No permite el salto de línea en el título
    overflow: hidden; // Oculta el contenido que se desborda
    text-overflow: ellipsis; // Muestra "..." al final del título trunco
  `,
  Text: styled.div`
    font-size: 14px;
    color: gray;
    font-family: "Arial Narrow", Arial, sans-serif;
    flex-wrap: wrap;
    display: flex;
    overflow: auto;
    height: 100%;
    max-height: 170px;
  `,
  P: styled.div`
    color: lightgrey;
    display: flex;
    align-self: flex-end;
    margin-top: 15px;
    margin-bottom: 0px;
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
    .ant-btn {
      width: 30px;
      align-content: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,
  Note: styled.div<{ $color: string }>`
    padding: 15px;
    padding-top: 10px;
    border-radius: 0px 0px 10px 10px;
    height: 175px;
    width: 55%;
    min-width: 266px;
    max-width: 266px;
    background-color: white;
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
    width: 55%;
    min-width: 270px;
    max-width: 270px;
    height: auto;
    align-items: center;
    display: flex;
    ${(props) => {
      if (props.$color) {
        return `background-color:${props.$color}`;
      }
    }}
  `,
  Wrapper: styled.div`
    width: 63%;
  `,
};
export default Styled;