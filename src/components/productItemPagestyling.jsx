import styled from "styled-components"

import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import Newsletter from "./newsletter.jsx"
import { Add, Remove } from "@mui/icons-material"
import {Products} from "../models"
import { DataStore } from "aws-amplify"
import CreateReview from "./item-page/createReview"
import ReviewResults from "./item-page/reviewResults"

const Container = styled.div`
    
`;
const Wrapper = styled.section`
    padding: 50px;
    display: flex;
    justify-content: center;
    align-item: center;
    position: relative;
    height 113vh;
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    border-radius: 25px;
    padding: 20px;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px 40px;
`;

const Title = styled.div`
    font-weight: bold;
    font-size: 60px;
    background-image: linear-gradient(45deg, #f3ec78, #af4261);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

const Desc = styled.div`
    margin: 20px 0px;
    font-weight: 500;
    font-size: 24px
`;

const Price = styled.div`
    font-weight: 100;
    font-size: 40px;
`;

const AddContainer = styled.div`
    width: 50%
    display: flex;
    align-item: center;
    justify-content: space-between;
    `;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    cursor: pointer;
`;

const Amount = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        background-color: #f8f4f4;
    }
`;

const ProductItemPagestyling = () => {
    const { id } = useParams()
    const[ productData, setProductData] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            const products = await DataStore.query(Products, id)
            setProductData(products)
        }
        fetchData()
    }, [])
    
    const [quantity, setQuantity] = useState(1);

    const handleQuantity = (type) =>{
        if(type === "dec") {
            quantity > 1 && setQuantity(quantity - 1); 
        } else {
            setQuantity(quantity + 1);
        }
    };
    
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
                            <Remove onClick={()=>handleQuantity("dec")}/>
                            <Amount>{quantity}</Amount>
                            <Add onClick={()=>handleQuantity("inc")}/>
                        </AmountContainer>
                        <Button>ADD TO WISHLIST</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
        </Container>
        <div>
            <h2>Reviews</h2>
            <CreateReview value={productData.id}/>
            <ReviewResults value={productData.id}/>
        </div>
    </div>
  )
}

export default ProductItemPagestyling;