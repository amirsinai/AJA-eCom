import { useState, useEffect } from "react"
import {Button, Card} from "react-bootstrap"

export default function Test(){
    const[testData, setTestData] = useState([])

    useEffect(() => {
        const SearchEndPoint = `http://localhost:3001/test`
        const fetchData = async() => {
            const response = await fetch(SearchEndPoint)
            const resData = await response.json()
            setTestData(resData)
        }
        fetchData()
    }, [])

    const TestDataMapping = testData.map((item, index) =>{
        return(
            <div className="CardHolder" key={index}>
                <Card bg="dark" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.Image}/>
                    <Card.Body>
                        <Card.Title>{item.ItemName}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    })
 
    // const results = resData.map((item, index) => {
    //     <div key={index}>{item.firstName}</div>
    // })

    return (
        <div className="TestMe">
            {TestDataMapping}
        </div>
    )
}