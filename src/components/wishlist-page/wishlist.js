import { useState, useEffect } from "react"
import WishlistProduct from "./wishlistProduct"

export default function WishlistPage(){
    const [fetchData, setFetchData] = useState([])

    useEffect(() => {
        const SearchEndPoint = `https://qndk0sl6mi.execute-api.us-west-2.amazonaws.com/wishlist`
        const fetchData = async() => {
            const response = await fetch(SearchEndPoint)
            const resData = await response.json()
            setFetchData(resData.Items)
        }
        fetchData()
    }, [])

    const wishlistStyle ={
        'border' : '1px solid black',
        'padding' : "1px"
    }

    return fetchData.length !== 0  ?
    <div>
        <h1>
            Wishlist:
        </h1>
        <div style={wishlistStyle}>
        {fetchData.map((item, index) => (
                    <WishlistProduct item={item} key={index} />
                ))}
        </div>
    </div>
    :
    <div>
        You don't have anything in your wishlist.
        <a href="/products">Back to Catalogue?</a>
    </div>
    
}