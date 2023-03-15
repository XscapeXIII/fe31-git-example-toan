import styled from "styled-components";

export const MainWrapper = styled.div`
  flex: 1;
  margin-top: 56px;
  padding: 16px;
  margin-left: 300px;
  transition: all 0.4s;
  background-color: rgb(10, 114, 62);

  ${(props) =>
    props.isFull &&
    `
  margin-left: 0;
  `}
`;
