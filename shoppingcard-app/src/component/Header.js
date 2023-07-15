import React from 'react'
import { FormControl, Nav, Navbar, Dropdown, Container, Badge, Button } from 'react-bootstrap'
import {CartState } from "../context/context"
import { FaShoppingCart } from 'react-icons/fa';
import {AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {

    const {state:{carts},dispatch,productDispatch} = CartState()
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand  >
                        <Link href="/">Shopping Card</Link>
                    </Navbar.Brand>
                    <Navbar.Text className="search">
                        <FormControl placeholder='Search A Product' onChange={(e)=>{
                            productDispatch({
                                type:"FILTER_BY_SEARCH",
                                payload:e.target.value,
                            })
                        }} className='m-auto' />
                    </Navbar.Text>
                    <Nav>
                        <Dropdown alignRight>
                            <Dropdown.Toggle variant="success" >
                                <FaShoppingCart color={"white"} fontSize={"2rem"} />
                                <Badge>{carts.length}</Badge>
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{ minWidth: 370 }}>
                                {carts.length>0?(<>
                                {carts.map(prod => (
                                     <span className="cartitem" key={prod.id}>
                                     <img
                                       src={prod.image}
                                       className="cartItemImg"
                                       alt={prod.name}
                                     />
                                     <div className="cartItemDetail">
                                       <span>{prod.name}</span>
                                       <span>₹ {prod.price.split(".")[0]}</span>
                                     </div>
                                     <AiFillDelete
                                       fontSize="20px"
                                       style={{ cursor: "pointer" }}
                                       onClick={() =>
                                         dispatch({
                                           type: "REMOVE_FROM_CART",
                                           payload: prod,
                                         })
                                       }
                                     />
                                   </span>
                                ))}
                                <Link to={"/cart"}>
                                    <Button style={{width:"95%",margin:"0 10px"}}>
                                        Go To Cart
                                    </Button>
                                </Link>

                                </>):(  <span style={{ padding: 10 }}>Cart is Empty!</span>)}
                              
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Container>
            </Navbar>

        </>

    );
}

export default Header
