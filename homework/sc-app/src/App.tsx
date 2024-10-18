import React from 'react';
import styled from 'styled-components';
import { StyledBtn } from './components/StyledBtn/StyledBtn';
import { Link } from './components/Link/Link';
import { SuperButton } from './components/SuperButton/SuperButton';
import { Box } from './components/Box/Box';
import { Menu } from './components/Menu/Menu';
import { TestBtn } from './components/TestBtn/TestBtn';
import { myTheme } from './styles/Theme.styled';



interface StyledButtonProps {
  bool: boolean; // Опциональный пропс для стиля
  size: number;
  display: boolean
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) => (props.bool ? 'black' : 'green')};
  color: white;
  padding: ${(props) => (props.size)}px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: ${(p) => (p.display ? 'block' : 'none')};
  position: relative; 

  &:hover::after {
    content: 'BOTTOM';
    transform: translateX(-50%); /* Центрируем текст по горизонтали */
    color: black;
    font-size: 20px;
  }
`;

function App() {
  return (
    <div>
      <Menu>
        <ul>
          <li><a href="https://example.com">menu item 1</a></li>
          <li><a href="https://example.com">menu item 2</a></li>
          <li><a href="https://example.com">menu item 3</a></li>
        </ul>
      </Menu>
      <PaintArea>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>
        <PixelBtn></PixelBtn>

      </PaintArea>
      <Wrapper>
        <TestBtn bgcolor={myTheme.colors.primary} fontSize={myTheme.fontSize.secondary} offDisplay={false}>Hello</TestBtn>
        <TestBtn bgcolor={myTheme.colors.primary} fontSize={myTheme.fontSize.secondary} offDisplay={false}>Hello</TestBtn>
        <TestBtn bgcolor={myTheme.colors.primary} fontSize={myTheme.fontSize.secondary} offDisplay={false}>Hello</TestBtn>
      </Wrapper>
      <h1>123</h1>
      <StyledButton bool={false} size={30} display={true} />
      <Box>
        <StyledBtn as={Link} href='#'>Link</StyledBtn>
        <StyledBtn as='a' href='#'>No Mercy</StyledBtn>
        <StyledBtn color='black'>No Mercy</StyledBtn>
        <SuperButton color='white' displayOff={false}>Super Button</SuperButton>
      </Box>
      
    </div>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding-top: 50px;
`

const PaintArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  height: 500px;
  width: 500px;
  background-color: green;
  margin: 0 auto
`


const PixelBtn = styled.button`
  border: none;
  height: 25px;
  width: 25px;
  background-color: #efa5c9;
  transition: background-color 1s, transform 2s ease;
  &:hover {
    background-color: #2b2327;

  }
`