import styled, { css } from "styled-components";
import { myTheme } from "../../styles/Theme.styled";

interface TestBtnProps {
  bgcolor?: string;
  fontSize?: string;
  offDisplay?: boolean;
}

export const TestBtn = styled.button<TestBtnProps>`
  border: none;
  padding: 15px 30px;
  background-color: ${props => props.bgcolor || "#6c96f1"};
  border-radius: 5px;
  color: white;
  font-size: ${props => props.fontSize};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${myTheme.colors.secondary};
  }

  ${props => props.offDisplay && css<TestBtnProps>`
    display: none;
  `}
`