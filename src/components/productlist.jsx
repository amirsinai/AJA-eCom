import styled from "styled-components"
import { useState, useEffect } from "react"
import { DataStore } from "aws-amplify";
import Product from "./productstyling";
import {Products} from "../models"


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const ProductList = () => {
    const[testData, setTestData] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            const products = await DataStore.query(Products)
            setTestData(products)
        }
        fetchData()
    }, [])

    console.log(testData)
      if(!testData){return <div>no data</div>}
        return(
            <div>
            <Container>
                {testData.map((item, index) => (
                    <Product item={item} key={index} />
                ))}
            </Container>
            </div>
        )
    }

export default ProductList