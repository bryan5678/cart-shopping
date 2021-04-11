import React, { Component } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
// import {Route, NavLink, Link} from 'react-router-dom'
import DataContext from './DataContext';

class Cart extends Component {
    static contextType = DataContext;
    // componentDidMount(){
    //     this.context.updateTotal()
    // }
    render() {
        const { cart, addCart, reduceCart, removeCart} = this.context;
        let unique = [...new Set(cart)];
        // let duplicates = unique.map(item => cart.filter(str => str === item).length);
        let duplicates = unique.map(item => [item._id, cart.filter(str => str === item).length]);
        let duplicatesTotal = unique.map(item => cart.filter(str => str === item).length * item.newPrice);

        // console.log(duplicatesTotal)
        let obj = Object.fromEntries(duplicates)
        // let objTotal = Object.fromEntries(duplicatesTotal)
        let total1 = duplicatesTotal.reduce((prev, item)=>{
            return prev + item
        },0)
        // console.log(obj)

        // let val = obj.forEach(([key, value]) => {
        //     console.log(`${key} ${value}`); 
        //   });
       
        let result = unique.map((item, index) =>{
            return(
            <Col xs={12} key={index}>
                <Card className="my-3 no-min-height">
                    <Card.Body >
                        <Row className="align-items-center">
                            <Col sm={12} md={4}>
                                <Card.Title className="mb-0">{item.title}</Card.Title>
                            </Col>
                            <Col sm={6} md={3}>
                                <Card.Img className="px-4 py-3" variant="top" src={item.img} alt={item.alt}/>

                                {/* <Card.Text className="">{item.img}</Card.Text>    */}
                            </Col>
                            <Col sm={3} md={1}>
                                <Card.Text className="d-flex justify-content-center f-15">${item.newPrice}</Card.Text>   
                            </Col>
                            
                            <Col sm={3} md={2} className="d-flex justify-content-md-between justify-content-center align-items-center my-3">
                                <Button size="md" variant="primary" onClick={()=> reduceCart(item._id)}>-</Button>
                                <span className="mx-3">
                                    {
                                       obj[item._id]
                                    }
                                </span>
                                <Button size="md" variant="primary" onClick={()=> addCart(item._id)}>+</Button>
                            </Col>
                            <Col sm={12} md={2}>
                                <Card.Text className="d-flex justify-content-center f-20 bold">${(item.newPrice*obj[item._id]).toFixed(2)}</Card.Text>
                             </Col>
                            <Col sm={12} md={12} className="d-flex justify-content-end">
                                <Button  size="sm" variant="danger" onClick={()=> removeCart(item._id)}>X</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col> 
            )
        })
        
        return (
            
            <Container>
                <h1 className="app">{`Cart ${cart.length === 0 ? "Empty"  : "Includes:"}`} </h1>
                <Row>
                    {result}
                </Row>
                    <h1 className={`${cart.length === 0 ? "d-none"  : "d-block app"}`}>Total: {total1.toFixed(2)}</h1>
            </Container>
        )
    }
}

export default Cart
