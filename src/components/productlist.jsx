import styled from "styled-components"
import { useState, useEffect } from "react"
// import { DataStore } from "aws-amplify";
import Product from "./productstyling";
// import { Products } from "../models"


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const ProductList = () => {
    const [fetchData, setFetchData] = useState([])

    useEffect(() => {
        const SearchEndPoint = `https://qndk0sl6mi.execute-api.us-west-2.amazonaws.com/items`
        const fetchData = async() => {
            const response = await fetch(SearchEndPoint)
            const resData = await response.json()
            setFetchData(resData.Items)
        }
        fetchData()
    }, [])

    return fetchData.length === 0 ?
        <div>no data</div>
        :
        <div>
            <Container>
                {fetchData.map((item, index) => (
                    <Product item={item} key={index} />
                ))}
            </Container>
        </div>
    //   if(fetchData.length === 0){return <div>no data</div>}
    //     return(
    //         <div>
    //         <Container>
    //             {fetchData.map((item, index) => (
    //                 <Product item={item} key={index} />
    //             ))}
    //         </Container>
    //         </div>
    //     )
}

export default ProductList