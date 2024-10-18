import React from 'react';
import styled from 'styled-components';
import { Menu } from './components/Menu/Menu';
import { MyTheme, c } from './style/MyTheme';
import { MenuItem } from './components/Menu/MenuItem';
import { Card, CardBtn, ImageArea, CardBtnDiv } from './components/Card/Card';
import soxsImage from './img/soxs.jpg';
import alenaCool from './img/alenaCool.jpg';
import alice from './img/alice.jpg';
import balerina from './img/balerina.jpg';
import comp from './img/comp.jpg';
import cry from './img/cry.jpg';
import eat from './img/eat.jpg';
import felix from './img/felix.jpg';
import hamster from './img/hamster.jpg';
import kiss from './img/kiss.jpg';
import love from './img/love.jpg';
import newYear from './img/newyear.jpg';

c('Main Page');

function App() {
  return (
    <MainDiv>
      <Menu>
        <Container maxWidth={'100%'}>
          <div>
            <div><a href="https://dzen.ru/a/XuV6jgR_I1khqU0x">гусик</a></div>
            <ul>
              <MenuItem><a href="#">Link</a></MenuItem>
              <MenuItem><a href="#">Link</a></MenuItem>
              <MenuItem><a href="#">Link</a></MenuItem>
              <MenuItem><a href="#">Link</a></MenuItem>
              <MenuItem><a href="#">Link</a></MenuItem>
              <MenuItem><a href="#">Link</a></MenuItem>
              <MenuItem><a href="#">Link</a></MenuItem>
              <MenuItem><a href="#">Link</a></MenuItem>
              <MenuItem><a href="#">Link</a></MenuItem>
            </ul>
          </div>
        </Container>
      </Menu>
        <Container>
          <Wrapper>
            <Card>
              <ImageArea><img src={soxsImage} alt="" /></ImageArea>
              <h3>Косы из носков</h3>
              <p>Хороший был день, Новая боровая, работка из дома, кофе в Тьери.</p>
              <CardBtnDiv>
                <CardBtn>Like</CardBtn>
                <CardBtn>UnLike</CardBtn>
              </CardBtnDiv>
            </Card>
            <Card>
              <ImageArea><img src={alenaCool} alt="" /></ImageArea>
              <h3>Алена классная</h3>
              <p>Еще не начали встречаться, но уже тогда понял что Алена классная, как и горы, ну и фонтан тоже классный</p>
              <CardBtnDiv>
                <CardBtn>Like</CardBtn>
                <CardBtn>UnLike</CardBtn>
              </CardBtnDiv>
          </Card>
          <Card>
              <ImageArea><img src={balerina} alt="" /></ImageArea>
              <h3>Апполон</h3>
              <p>Алена меня фоткает только в самых лучших позах и кадрах</p>
              <CardBtnDiv>
                <CardBtn>Like</CardBtn>
                <CardBtn>UnLike</CardBtn>
              </CardBtnDiv>
          </Card>
          <Card>
              <ImageArea><img src={comp} alt="" /></ImageArea>
              <h3>Новый компик</h3>
              <p>Эх помню день в предвкушении, привезли новый компик, сижу довольный, а позже меня ждала бутылочка шампуня</p>
              <CardBtnDiv>
                <CardBtn>Like</CardBtn>
                <CardBtn>UnLike</CardBtn>
              </CardBtnDiv>
          </Card>
          <Card>
              <ImageArea><img src={cry} alt="" /></ImageArea>
              <h3>Алена плачет</h3>
            <p>Потому что от счатья, пригубила винца и жизнь заебца
              </p>
              <CardBtnDiv>
                <CardBtn>Like</CardBtn>
                <CardBtn>UnLike</CardBtn>
              </CardBtnDiv>
          </Card>
          <Card>
              <ImageArea><img src={eat} alt="" /></ImageArea>
              <h3>Поеу</h3>
              <p>Тортик был вкусный.</p>
              <CardBtnDiv>
                <CardBtn>Like</CardBtn>
                <CardBtn>UnLike</CardBtn>
              </CardBtnDiv>
          </Card>
          <Card>
              <ImageArea><img src={felix} alt="" /></ImageArea>
              <h3>Феликс</h3>
              <p>Аленка проснулась и напиздюлякала что я Феликса обнимаю, а ее нет</p>
              <CardBtnDiv>
                <CardBtn>Like</CardBtn>
                <CardBtn>UnLike</CardBtn>
              </CardBtnDiv>
          </Card>
          <Card>
              <ImageArea><img src={hamster} alt="" /></ImageArea>
              <h3>Хомяко-дни</h3>
              <p>Хуячит любимка, но еще не знает что за 50р)))</p>
              <CardBtnDiv>
                <CardBtn>Like</CardBtn>
                <CardBtn>UnLike</CardBtn>
              </CardBtnDiv>
          </Card>
          <Card>
              <ImageArea><img src={kiss} alt="" /></ImageArea>
              <h3>Страсть</h3>
              <p>Сосались как то у Зорина на Др</p>
              <CardBtnDiv>
                <CardBtn>Like</CardBtn>
                <CardBtn>UnLike</CardBtn>
              </CardBtnDiv>
          </Card>
          <Card>
              <ImageArea><img src={love} alt="" /></ImageArea>
              <h3>Романтика</h3>
              <p>Типа аля в отелях</p>
              <CardBtnDiv>
                <CardBtn>Like</CardBtn>
                <CardBtn>UnLike</CardBtn>
              </CardBtnDiv>
          </Card>
          <Card>
              <ImageArea><img src={newYear} alt="" /></ImageArea>
              <h3>Еука с Аленкой</h3>
              <p>Как то фоткал я, но ниче не понравилось Аленке</p>
              <CardBtnDiv>
                <CardBtn>Like</CardBtn>
                <CardBtn>UnLike</CardBtn>
              </CardBtnDiv>
          </Card>
          <Card>
              <ImageArea><img src={alice} alt="" /></ImageArea>
              <h3>Хамлюк Я Алиса</h3>
              <p>Так и познакомились</p>
              <CardBtnDiv>
                <CardBtn>Like</CardBtn>
                <CardBtn>UnLike</CardBtn>
              </CardBtnDiv>
            </Card>
          </Wrapper>
      </Container>
    </MainDiv>
  );
}

export default App;

interface ContainerProps {
  maxWidth?: string
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  max-width: ${props => props.maxWidth || MyTheme.width.container};
  width: 100%;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 50px;
  flex-wrap: wrap;
`

const MainDiv = styled.div`
  position: relative;
`