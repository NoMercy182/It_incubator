import styled from "styled-components";
import { MyTheme } from "../../style/MyTheme";

export const MenuItem = styled.li`
  display:flex;
  justify-content: center;
  align-items: center;
  max-width: ${MyTheme.width.menuItem};
  width: 100%;
  list-style: none;
  border-radius: 5px;
  cursor: pointer;
  background: ${MyTheme.colors.primary};
  transition: 0.3s ease;

  &:hover {
  background: linear-gradient(135deg, #ece2ec, #4E71FE);
}

a {
    display: block;
    color: white;
    padding: 10px;
    text-decoration: none;
  }
`