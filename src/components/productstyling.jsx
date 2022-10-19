import styled from "styled-components"
import { SearchOutlined, ShoppingCartOutlined, FavoriteBorderOutlined } from "@mui/icons-material";

const Container = styled.div`
    flex: 1;
    margin: 5px;
`;

const Circle = styled.div``;
const Image = styled.img``;
const Info = styled.div``;
const Icon = styled.div``;

const productstyling = ({item, index}) => {
  return (
    <div key={index}>
    <Container>
        <Circle/>
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