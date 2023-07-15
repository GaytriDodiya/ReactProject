import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/context";
import Rating from "./Rating";
import '../style.css'
const Cart = () => {
  const {
    state: { carts },
    dispatch,
  } = CartState();

 
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      carts.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [carts]);

  //  console.log(carts);

  // localStorage.setItem('_carts',JSON.stringify(carts) );
  // let retrive = JSON.parse(localStorage.getItem('_carts'));
  // console.log(retrive);
  
  const LOCAL_STRORAGE_KEY = "carts";

  // set product data using react hook
  useEffect(() => {
    localStorage.setItem(LOCAL_STRORAGE_KEY, JSON.stringify(carts))
  }, [carts])

   // get product data
  //  useEffect(() => {
  //   const retrivedata = JSON.parse(localStorage.getItem(LOCAL_STRORAGE_KEY))
  //     if (retrivedata) dispatch(retrivedata)
  //   console.log(retrivedata)
  // }, [dispatch]);

  // console.log(retrivedata)


  return (
    <div className="Home">
      <div className="productCobtaiber">
        <ListGroup className="listG">
          {carts.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} className="images" alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>₹ {prod.price}</Col>
                <Col md={2}>
                  <Rating rating={prod.ratings} />
                </Col>
                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div className="filters summary">
          <span className="title">Subtotal ({carts.length}) items</span>
          <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
          <Button type="button" disabled={carts.length === 0}>
            Proceed to Checkout
          </Button>
        </div>
      </div>

    </div>
  );
};

export default Cart;