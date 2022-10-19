import styled from "styled-components"
import { SearchOutlined, ShoppingCartOutlined, FavoriteBorderOutlined } from "@mui/icons-material";

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-item: center;
    justify-content: center;
    background-color: 
    position: relative;
`;

const Image = styled.img`
    height: 75%
`;

const Info = styled.div`
    width: 100%;
    height: 100%;
    align-item: center;
    position: absolute;

`;
const Icon = styled.div`
    color: red;
`;

const productstyling = ({item, index}) => {
  return (
    <div key={index}>
    <Container>
        <Image src={item.Image}/>
        <Info>
            <Icon>
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