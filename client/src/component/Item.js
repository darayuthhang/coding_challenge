import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Item = ({
    author,
    title, 
    detailPriceActionRetail,
    detailPriceActionAfterDisCount,
    productImage
}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Img variant="top" src={productImage} alt="product image" />
                <Card.Title>{title}</Card.Title>
                <Card.Title>By: {author}</Card.Title>
                <Card.Text>{detailPriceActionRetail}</Card.Text>
                <Card.Text>{detailPriceActionAfterDisCount}</Card.Text>
                <Button variant="primary">Buy</Button>
            </Card.Body>
        </Card>
    );
};

export default Item;
