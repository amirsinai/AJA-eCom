import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: coral;
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #000000;
  border-radius: 50%;
  display: flex;align-items: center;
  justify-content: center;
`
const Slider = () => {
  return (
    <Container>
        <Arrow>
            <KeyboardArrowLeftOutlined/>
        </Arrow>
        <Arrow>
            <KeyboardArrowRightOutlined/>
        </Arrow>
    </Container>
  );
}

export default Slider
