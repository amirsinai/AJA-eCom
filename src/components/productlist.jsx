import styled from "styled-components"
import { useState, useEffect } from "react"
import Product from "./productstyling";

const Container = styled.div`
    padding: 20px;
    display: flex;
`

const ProductList = () => {
    const[testData, setTestData] = useState([])

    useEffect(() => {
        const SearchEndPoint = `https://qndk0sl6mi.execute-api.us-west-2.amazonaws.com/items`
        const fetchData = async() => {
            const response = await fetch(SearchEndPoint)
            const resData = await response.json()
            setTestData(resData.Items)
        }
        fetchData()
    }, [])

    console.log(testData)

        return(
            <div>
            <Container>
                {testData.map((item, index) => (
                    <Product item={item.ItemName} key={index} />
                ))}
            </Container>
            </div>
        )
    }

export default ProductList