import styled from "styled-components"
import { MyAnimation } from "../../styles/animations/Animations"

interface StyledBtnProps {
  color: string;
}

export const StyledBtn = styled.button<StyledBtnProps>`
  border: none;
  background-color: #f0a1d3;
  padding: 10px 20px;
  color: ${(props) => (props.color)};
  font-size: 2rem;
  font-weight: bold;
  &:hover {
    background-color: #221b1f;
    animation: ${MyAnimation} 1.5s
  }
  &:last-child {
    &:hover {
      background-color: #36a03d;
      animation: ${MyAnimation} 1.5s ease-in-out infinite;
    }
  }
`