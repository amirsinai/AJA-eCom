// import { useState, useEffect} from "react"
// import { useParams } from "react-router-dom"
// import styled from "styled-components"
import Item from "./productItemPagestyling"

// const Container = styled.div`
//     flex: 1;
//     margin: 5px;
//     min-width: 280px;
//     height: 350px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: relative;
// }
// `
export default function ProductItem(){
    // const { id } = useParams()
    // const[ productData, setProductData] = useState([])

    // useEffect(() => {
    //     const SearchEndPoint = `https://qndk0sl6mi.execute-api.us-west-2.amazonaws.com/items/${id}`
    //     const fetchData = async() => {
    //         const response = await fetch(SearchEndPoint)
    //         const resData = await response.json()
    //         setProductData(resData.Item)
    //     }
    //     fetchData()
    // }, [])

    return(
        <div>
            <Item>
                
            </Item>
        </div>
    )
}