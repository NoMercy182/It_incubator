import styled from "styled-components";
import { StyledBtn } from "../StyledBtn/StyledBtn";

interface SuperButtonProps {
  displayOff: boolean;
}

export const SuperButton = styled(StyledBtn)<SuperButtonProps>`
  border-radius: 5px;
  background-color: #ebed87;
  color: ${(props) => (props.color || '#ebed87')};
  display: ${(props) => (props.displayOff ? 'none' : 'block')};
`