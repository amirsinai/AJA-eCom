// import styled from "styled-components"

// const Container = styled`

// `;
// const Wrapper = styled`

// `;
// const ImgContainer = styled``;
// const Image = styled``;
// const InfoContainer = styled``;
// const Title = styled``;
// const Desc = styled``;
// const Price = styled``;
// const AddContainer = styled``;
// const AmountContainer = styled``;
// const Remove = styled``;
// const Amount = styled``;
// const Add = styled``;
// const Button = styled``;

// const productItemPagestyling = () => {
//     const { id } = useParams()
//     const[ productData, setProductData] = useState([])

//     useEffect(() => {
//         const SearchEndPoint = `https://qndk0sl6mi.execute-api.us-west-2.amazonaws.com/items/${id}`
//         const fetchData = async() => {
//             const response = await fetch(SearchEndPoint)
//             const resData = await response.json()
//             setProductData(resData.Item)
//         }
//         fetchData()
//     }, [])

//   return (
//     <div key={index}>
//         <Container>
//             <Wrapper>
//                 <ImgContainer>
//                     <Image src={item.Image}/>
//                 </ImgContainer>
//                 <InfoContainer>
//                     <Title></Title>
//                     <Desc>

//                     </Desc>
//                     <Price>{productData.Price}</Price>
//                     <AddContainer>
//                         <AmountContainer>
//                             <Remove/>
//                             <Amount>1</Amount>
//                             <Add />
//                         </AmountContainer>
//                         <Button>ADD TO WISHLIST</Button>
//                     </AddContainer>
//                 </InfoContainer>
//             </Wrapper>
//         </Container>
//     </div>
//   )
// }

// export default productItemPagestyling;