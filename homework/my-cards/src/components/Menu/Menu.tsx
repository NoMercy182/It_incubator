import styled from "styled-components"

export const Menu = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #d4dae4;
  ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  div {
    div {
      width: 100%;
      display: flex;
      align-items: center;
      div{/* a */
        width: 100px;
      }
    }
  }
`