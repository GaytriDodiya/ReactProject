import React from 'react'
import { Card, Button } from 'react-bootstrap';
import Rating from './Rating';
import { CartState } from '../context/context'
import { useEffect } from 'react';
const SingleProduuct = ({ prod }) => {
  const { state: { carts }, dispatch } = CartState();

 let LOCAL_STRORAGE_KEY = "carts";
 useEffect(() => {
  localStorage.setItem(LOCAL_STRORAGE_KEY, JSON.stringify(carts))
})

  return (
    <div className='products'>
      <Card>
        <Card.Img variant='top' src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span >&#8377; {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 Days Delivry</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          {
            carts.some(p => p.id === prod.id) ? (
              <Button onClick={() => { dispatch({ type: 'REMOVE_FROM_CART', payload: prod }) }} variant="danger">Remove From Cart</Button>
            ) :
              (
                <Button onClick={() => { dispatch({ type: 'ADD_TO_CART', payload: prod }) }}
                  disabled={!prod.inStock}
                >
                  {!prod.inStock ? 'out of stock' : 'add to cart'}
                </Button>
              )
          }
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleProduuct
