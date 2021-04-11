import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import {NavLink} from 'react-router-dom'
import DataContext from './DataContext'


export class Product extends Component {
    static contextType = DataContext

    render() {
        const {products} = this.context

        let result = products.map((product)=>{
            return (
                <Col key={product._id} xs={12} sm={6} md={4} lg={3} >
                    <Card className="card--courses mb-3">
                        <NavLink className="no-underline" to={`${this.props.match.url}/${product._id}`}>
                            <Card.Img className="px-4 py-3" variant="top" src={product.img} alt={product.alt}/>
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>{product.text}</Card.Text>
                                <div className="card__rating">
                                        <span className="card__stars">
                                            {[...Array(product.stars)].map((star) =>{
                                                return  <FaStar className="mr-1"/>;
                                            })}
                                            { [...Array(product.halfStars)].map((star) =>{
                                                return  <FaStarHalfAlt className="mr-1"/>;
                                            })}
                                            {[...Array(product.unStars)].map((star) =>{
                                                return  <FaRegStar className="mr-1" 
                                                        />
                                            })}
                                        </span>
                                        <span className="card__score">
                                            {product.score}
                                        </span>
                                        <span className="card__total">
                                            {product.total}
                                        </span>
                                    </div>
                                    <div className="card__price">
                                        <span>{product.oldPrice}</span>
                                        <span>   {product.newPrice}</span>
                                    </div>
                            </Card.Body>
                        </NavLink>    
                        <Button className ="w-50 container mb-3" size="sm" onClick={()=> this.context.addCart(product._id)} variant="primary">Buy now</Button>
                    </Card> 
                </Col>           
            )
        })
        return (
            <Container>
                <h1 className="app">Product list</h1>
                <p className="app">{this.props.match.url}</p>
                <Row>
                    {result}
                </Row>
            </Container>    
        )
    }
}

export default Product

