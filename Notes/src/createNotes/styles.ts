import styled from "styled-components";

const Styled = {
  Container: styled.div`
    padding-top: 10px;
    padding-left: 50px;
  `,
  H2: styled.div`
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
  `,
  EditForm: styled.div<{ $color: string }>`
    border: solid 1px lightgrey;
    border-radius: 20px;
    width: 370px;
    height: 345px;
    margin-top: 20px;
    padding: 25px 20px 10px 10px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    font-family: Arial, Helvetica, sans-serif;
    align-items: center;
    ${(props) => {
      if (props.$color) {
        return `background-color:${props.$color}`;
      }
    }}
  `,
  Input: styled.div`
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-top: 25px;
    font-weight: "bold";
    .ant-input {
      background-color: transparent;
      font-weight: bold;
    }
  `,
  TextArea: styled.div`
    width: 350px;
    height: 100px;
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-bottom: 25px;
    .ant-input {
      background-color: transparent;
    }
  `,
  Label: styled.div`
    font-weight: bold;
  `,
  Button: styled.div`
    width: auto;
    height: auto;
  `,
  Footer: styled.div`
    display: flex;
    gap: 150px;
  `,
};
export default Styled;
