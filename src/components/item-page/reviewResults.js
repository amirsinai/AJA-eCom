import { DataStore } from "aws-amplify";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import { Reviews } from "../../models"

export default function ReviewResults(){
    let { id } = useParams()
    let [reviewData, setReviewData] = useState([])

    useEffect(() => {
        async function applyData(){
            const SearchEndPoint = `https://qndk0sl6mi.execute-api.us-west-2.amazonaws.com/reviews`
            const fetchData = async() => {
                const response = await fetch(SearchEndPoint)
                const resData = await response.json()
                setReviewData(resData.Items)
                console.log(reviewData)
            }
            fetchData()
        }
        applyData()
    }, [])

    const spreadReview = reviewData.map((item,index) => {
        async function deleteMe(){
            const locateItemToDelete = await DataStore.query(Reviews, `${item.id}`)
            DataStore.delete(locateItemToDelete)
        }

        const ReviewStyle ={
            'border' : '1px solid black',
            'padding' : "1px"
        }

        return(
            <div style={ReviewStyle} key={index}>
                <h4>{item.Rating}</h4>
                <p>{item.Comment}</p>
                <button onClick={deleteMe()}>Delete Post</button>
            </div>
        )
    })

    return(
        <div>
            {spreadReview}
        </div>
    )
}