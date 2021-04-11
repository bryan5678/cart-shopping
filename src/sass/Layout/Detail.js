import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link} from 'react-router-dom'
import DataContext from './DataContext'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

class Detail extends Component {
    static contextType = DataContext;
    state = {
        product: []
    }

    getProduct = () =>{
        if(this.props.match.params.id){
            const res = this.context.products;
            const id = this.props.match.params.id

            const data = res.filter(item =>{
            // const data = products.filter(item =>{
                return item._id == id //Dấu == mới dùng dc, dấu === không dùng dc
            })
            // console.log(this.props.match.params.id)
            this.setState({product: data})
        }
    };

    componentDidMount(){
        this.getProduct();
    }

    render() {
        const {product} = this.state;

        return (
            <Container>
                <h1 className="app">Product details</h1>
                <p className="app">{this.props.match.url}</p>

                <Row className="mt-5">
                    {
                        product.map((item, index) =>{
                            return(
                    <Col sm={12} key={index}>
                        <Card className="card--courses mb-3">
                            {/* <NavLink className="no-underline" to={`${this.props.match.url}/${item._id}`}> */}
                            <Row>
                                <Col md={4}>
                                    <Card.Img className="px-4 py-3" variant="top" src={item.img} alt={item.alt}/>
                                </Col>
                                <Col md={8} >
                                    <Card.Body>
                                        <Card.Title className="f-20">{item.title}</Card.Title>
                                        <Card.Text className="f-15">{item.text}</Card.Text>
                                        <Card.Subtitle className="my-3 text-muted">{item.des}</Card.Subtitle>

                                        <div className="card__rating justify-content-center">
                                                <span className="card__stars f-15">
                                                    {[...Array(item.stars)].map((star) =>{
                                                        return  <FaStar className="mr-1"/>;
                                                    })}
                                                    { [...Array(item.halfStars)].map((star) =>{
                                                        return  <FaStarHalfAlt className="mr-1"/>;
                                                    })}
                                                    {[...Array(item.unStars)].map((star) =>{
                                                        return  <FaRegStar className="mr-1" 
                                                                />
                                                    })}
                                                </span>
                                                <span className="f-15 card__score">
                                                    {item.score}
                                                </span>
                                                <span className="f-15 card__total">
                                                    {item.total}
                                                </span>
                                            </div>
                                            <div className="text-center card__price">
                                                <span className="mx-2 f-15">${item.oldPrice}</span>
                                                <span className="mx-2 f-20">${item.newPrice}</span>
                                            </div>
                                    </Card.Body>
                                    <Row className="align-items-center mb-3">
                                        <Col className="d-flex justify-content-end">
                                            <Link className=" f-15" to="/product">Back to Product List</Link>     

                                        </Col>
                                        <Col>
                                            <Button className ="w-50 f-15" size="sm" onClick={()=> this.context.addCart(item._id)} variant="primary">Buy now</Button>

                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            
                                
                            {/* </NavLink>  */}
                                
                            
                            

                        </Card> 
                        
                        {/* <Card>
                            <NavLink to={`${this.props.match.url}/${product._id}`}>
                                <Card.Body>
                                    <Card.Title>{product._id}-{product.name}</Card.Title>
                                    <Card.Text>
                                        {product.price}
                                    </Card.Text>
                                </Card.Body>
                            </NavLink>    
                            <Button className="w-25 container" onClick={()=> this.context.addCart(product._id)} variant="primary">Buy now</Button>
                        </Card> */}
                    </Col> 


                            
                            )
                        })
                    }
                </Row>
            </Container>
        )
    }
}

export default Detail
