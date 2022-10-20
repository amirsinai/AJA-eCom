import styled from "styled-components"
import { SearchOutlined, ShoppingCartOutlined, FavoriteBorderOutlined } from "@mui/icons-material";

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
`;

const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
position: relative;
&:hover ${Info}{
  opacity: 1;
}
`;

const Image = styled.img`
    height: 75%
`;

const Icon = styled.div`
    color: black;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
  }
`;

const productstyling = ({item, index}) => {
  return (
    <div key={index}>
    <Container>
        <Image src={item.Image}/>
        <Info>
            <Icon container direction="row">
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
    </div>
  )
}

export default productstyling