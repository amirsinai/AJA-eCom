import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Item from "./productItemPagestyling"

const Container = styled.div`

`

const ProductItem = () => {
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

    return(
        <div>
        <Container>
            {productData.map((item, index) => (
                <Item item={item} key={index} />
            ))}
        </Container>
        </div>
    )
}
    

export default ProductItem