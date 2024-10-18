import styled from "styled-components"
import { MyTheme } from "../../style/MyTheme"

export const Card = styled.div`
  margin-bottom: 100px;
  padding: 10px;
  width: ${MyTheme.width.card};
  /* height: ${MyTheme.height.card}; */
  background: white;
  border-radius: 10px;
  transition: 0.3s ease;
  &:hover{
    background: #ced7df;
  }
  h3 {
    padding: 15px;
  }
  p {
    height: 100px;
    font-size: 15px;
    padding: 15px;
    padding-top: 10px;
  }
`

export const CardBtnDiv = styled.div`
  display: flex;
  justify-content: space-around;
`

export const ImageArea = styled.div`
  width: 100%;
  height: 350px;
  background: #6e4148;
  border-radius: 10px;
  margin: 0 auto;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`

export const CardBtn = styled.button`
  width: ${MyTheme.width.cardBtn};
  display:flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  background: ${MyTheme.colors.primary};
  transition: 0.3s ease;
  color: white;
  border: none;
  padding: 10px;
  transition: 0.3s ease;

  &:hover {
  background: linear-gradient(135deg, #ece2ec, #4E71FE);
  }
`