import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from "@mui/icons-material"
import styled from "styled-components"
import SlideImg from "../img/slideImg.png"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #000000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  //This is to allow the Left Arrow and the right Arrow to not be on top of each other. This will allow them to be seperated.
  //Makes a condtion to allow different placement for the left and right arrow.
  left: ${props=> props.direction === "left" && '10px'};
  right: ${props=> props.direction === "right" && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Slide = styled.div`
  width: 100vw;
  height 100vh;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height="80%"
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`
const Desc = styled.p``
const Button = styled.button``

const Slider = () => {
  return (
    <Container>
        <Arrow direction='left'>
            <KeyboardArrowLeftOutlined/>
        </Arrow>
        <Wrapper>
              <Slide>
            <ImgContainer>
              <Image src='https://pngtree.com/freepng/scary-halloween_5946675.html'/>
            </ImgContainer>
            <InfoContainer>
              <Title>Halloween Sale</Title>
              <Desc>Don't wait now Halloween is coming! Get 30% off with any purchase above $50!</Desc>
              <Button>Shop Now</Button>            
            </InfoContainer>
              </Slide>
        </Wrapper>
        <Arrow direction="right">
            <KeyboardArrowRightOutlined/>
        </Arrow>
    </Container>
  );
}

export default Slider
