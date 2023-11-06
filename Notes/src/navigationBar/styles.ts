import styled from "styled-components";

const Styled = {
  NavBar: styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 50px;
    padding-top: 10px;
    padding-right: 50px;
  `,
  Container: styled.div`
    gap: 5px;
    display: flex;
    .ant-select-single {
      width: 130px;
    }
    .ant-btn .ant-btn-icon {
      font-size: 17px;
    }
    .ant-btn {
      width: 50px;
      align-content: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,
};
export default Styled;
