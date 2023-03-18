import styled from "styled-components";

export const SidebarWrapper = styled.div`
  position: absolute;
  margin-top: 56px;
  left: -300px;
  padding: 16px;
  width: 300px;
  height: calc(100% - 56px);
  background-color: #126969;
  overflow: hidden;
  transition: all 0.4s;

  ${(props) =>
    props.isShow &&
    `
  left: 0;
  `}
`;
