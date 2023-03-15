import styled from "styled-components";

export const Title = styled.h1`
  color: palevioletred;
`;

export const Button = styled.button`
  padding: 4px 8px;
  border: none;
  color: gray;
  border-radius: 4px;
  width: ${(props) => props.width || "auto"};
  transition: all 0.3;
  cursor: pointer;
  ${(props) => {
    switch (props.type) {
      case "primary": {
        return `
      background-color: red;
      color: white;
      border: none;
      &:hover{
        opacity: 0.7;
      }
      `;
      }
      case "outline":
      default: {
        return `
      background-color: transparent;
      border: 1px solid aqua;
      color: aqua
      &:hover{
        border: 1px solid red;
        color: red;
      }
      `;
      }
    }
  }}
`;
