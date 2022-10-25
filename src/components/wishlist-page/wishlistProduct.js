import { useEffect, useState } from "react";




const WishlistProductStyling = ({item, index}) => {
    const[productData, setProductData] = useState([])

    useEffect(() => {
        const SearchEndPoint = `https://qndk0sl6mi.execute-api.us-west-2.amazonaws.com/items/${item.itemLink}`
        const fetchData = async() => {
            const response = await fetch(SearchEndPoint)
            const resData = await response.json()
            setProductData(resData.Item)
        }
        fetchData()
    }, [])


    return (
      <div key={index}>
        <img src={productData.Image} alt={`${productData.Name}`}></img>
        <h2>{productData.Name}</h2>
        <p>{productData.Price}</p>
      </div>
    )
  };

export default WishlistProductStyling