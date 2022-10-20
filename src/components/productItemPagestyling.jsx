import styled from "styled-components"
import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"


const Container = styled.div``;
const Wrapper = styled.section``;
const ImgContainer = styled.div``;
const Image = styled.img``;
const InfoContainer = styled.div``;
const Title = styled.div``;
const Desc = styled.div``;
const Price = styled.div``;
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
                    <Title></Title>
                    <Desc>
                        
                    </Desc>
                    <Price>{productData.Price}</Price>
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