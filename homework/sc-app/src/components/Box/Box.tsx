import styled from "styled-components";
import { Link } from "../Link/Link";
import { myTheme } from "../../styles/Theme.styled";

export const Box = styled.div`
  display: flex;
  gap: 30px;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #d4c7c7;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }
  @media ${myTheme.media.tablet} {
    flex-direction: column;
  }
`