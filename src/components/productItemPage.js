import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import {Button, Card} from "react-bootstrap"
import styled from "styled-components"

export default function ProductItem(){
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
            <img  src={productData.Image} alt={productData.itemName}/>
            <h2>
                {productData.itemName}
            </h2>
            <p>Description: {productData.Desc}</p>
            <p>Price: {productData.Price}</p>
            <a href="#"><Button variant="primary">Add to Wishlist</Button></a> 
        </div>
    )
}