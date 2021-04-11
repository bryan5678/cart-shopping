// import React, { Component } from 'react'
// import { Container, Row, Col, Card, Button } from 'react-bootstrap'
// import {Route, NavLink, Link} from 'react-router-dom'
// import DataContext from './DataContext'

// class Card extends Component {
//     static contextType = DataContext

//     render() {
//         const {products} = this.context

//         let result = products.map((product, index)=>{
//             return (
//         <Col key={index}>
//             <Card className="card--courses">
//                 <NavLink to={`${this.props.match.url}/${product._id}`}>
//                     <Card.Img variant="top" src={product.img} alt={product.alt}/>
//                     <Card.Body>
//                         <Card.Title>{product.title}</Card.Title>
//                         <Card.Text>{product.text}</Card.Text>
//                         <div className="card__rating">
//                                 <span className="card__stars">
//                                     {[...Array(product.stars)].map((star) =>{
//                                         return  <FaStar className="mr-1"/>;
//                                     })}
//                                     { [...Array(product.halfStars)].map((star) =>{
//                                         return  <FaStarHalfAlt className="mr-1"/>;
//                                     })}
//                                     {[...Array(product.unStars)].map((star) =>{
//                                         return  <FaRegStar className="mr-1" 
//                                                 />
//                                     })}
//                                 </span>
//                                 <span className="card__score">
//                                         {product.score}
//                                 </span>
//                                 <span className="card__total">
//                                     {product.total}
//                                 </span>
//                             </div>
//                             <div className="card__price">
//                                 <span>{product.oldPrice}</span>
//                                 <span>   {product.newPrice}</span>
//                             </div>
//                     </Card.Body>
//                 </NavLink>  
//                 <Button className="w-25 container" onClick={()=> this.context.addCart(product._id)} variant="primary">Buy now</Button>
//             </Card>
//         </Col>           
//         )
//     })
//         return (
//             <Row>
//                 {result}
//             </Row>
//         )
//     }
// }

// export default Card