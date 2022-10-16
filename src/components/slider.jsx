import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { useState } from "react";
//import SlideImg from "../img/slideImg.png";
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
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
  left: ${(props) => props.direction === "left" && '10px'};
  right: ${(props) => props.direction === "right" && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height="80%";
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
      if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      } else{
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }
    };

  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <KeyboardArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item) => (
              <Slide bg={item.bg}>
            <ImgContainer>
              <Image src={item.img}/>
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Shop Now</Button>            
            </InfoContainer>
              </Slide>
          ))}    
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <KeyboardArrowRightOutlined/>
        </Arrow>
    </Container>
  );
};

export default Slider;