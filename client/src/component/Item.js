import React from 'react';
import { Card, Button } from 'react-bootstrap';
/*

{
    "success": true,
    "data": [
        {
            "author": "Dan Robertson",
            "title": "Zoe Pencarrow and the Falling Star",
            "detialPriceActionRetail": "",
            "detailPriceActionAfterDisCount": "$12.49"
        }
    ]
}
*/
const Item = ({
    author,
    title, 
    detailPriceActionRetail,
    detailPriceActionAfterDisCount
}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Title>By: {author}</Card.Title>
                <Card.Text>{detailPriceActionRetail}</Card.Text>
                <Card.Text>{detailPriceActionAfterDisCount}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default Item;
