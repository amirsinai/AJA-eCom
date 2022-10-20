import styled from "styled-components"
import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"

const Container = styled.div``;
const Wrapper = styled.section`
    padding: 50px;
    display: flex;
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.div`
    font-weight: 200;
`;

const Desc = styled.div`
    margin: 20px 0px;
`;

const Price = styled.div`
    font-weight: 100;
    font-size: 40px;
`;
const AddContainer = styled.div``;
const AmountContainer = styled.div``;
const Remove = styled.div``;
const Amount = styled.div``;
const Add = styled.div``;
const Button = styled.button``;

const ProductItemPagestyling = () => {
    const { id } = useParams()
    const[ productData, setProductData] = useState([])

    useEffect(() => {
        const SearchEndPoint = `https://qndk0sl6mi.execute-api.us-west-2.amazonaws.com/items/${id}`
        const fetchData = async() => {
            const response = await fetch(SearchEndPoint)
            const resData = await response.json()
            setProductData(resData.Item)
        }
        fetchData()
    }, [])

  return (
    <div>
        <Container>
            <Wrapper>
                <ImgContainer>
                    <Image src={productData.Image}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{productData.Name}</Title>
                    <Desc>{productData.Desc}</Desc>
                    <Price>${productData.Price}</Price>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO WISHLIST</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
        </Container>
    </div>
  )
}

export default ProductItemPagestyling;