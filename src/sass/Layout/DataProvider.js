import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

import DataContext from './DataContext'
import course1 from '../../img/kh1.jpg'
import course2 from '../../img/kh2.jpg'
import course3 from '../../img/kh3.jpg'
import course4 from '../../img/kh4.jpg'
import course5 from '../../img/kh5.jpg'
import course6 from '../../img/kh6.jpg'
import course7 from '../../img/kh7.jpg'
import course8 from '../../img/kh8.jpg'

class DataProvider extends Component {
    state={    
        products: [
            {
                _id: uuidv4(),
                img: course1,
                alt: 'Course',
                title: 'Samsung Galaxy Note 20 Ultra - 128Gb, Khuyến mãi khủng. Duy nhất hôm nay',
                text: 'Samsung',
                des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quo maiores voluptatem exercitationem consequatur soluta eius eligendi accusantium molestias repellendus. Animi facere eligendi earum! Veniam iste corporis eveniet quasi sapiente ea doloribus fugiat sequi ad quod dolorum quis ab, distinctio assumenda rerum beatae minus nulla, ratione, iusto exercitationem blanditiis asperiores.',
                score: 4.6,
                total: '(11.597)',
                oldPrice: 179.99,
                newPrice: 9.9,
                stars: 4,
                halfStars: 1,
                unStars: 0
        
            },
            {
                _id: uuidv4(),
                img: course2,
                alt: 'Course',
                title: 'iPhone 12 128GB - 4GB, Khuyến mãi khủng. Duy nhất hôm nay',
                text: 'Apple',
                des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quo maiores voluptatem exercitationem consequatur soluta eius eligendi accusantium molestias repellendus. Animi facere eligendi earum! Veniam iste corporis eveniet quasi sapiente ea doloribus fugiat sequi ad quod dolorum quis ab, distinctio assumenda rerum beatae minus nulla, ratione, iusto exercitationem blanditiis asperiores.',
                score: 4.6,
                total: '(1.159)',
                oldPrice: 59.99,
                newPrice: 39.9,
                stars: 2,
                halfStars: 1,
                unStars: 2
        
            },
            {
                _id: uuidv4(),
                img: course3,
                alt: 'Course',
                title: 'Xiaomi Mi 11 5G - 128Gb, Khuyến mãi khủng. Duy nhất hôm nay',
                text: 'Xiaomi',
                des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quo maiores voluptatem exercitationem consequatur soluta eius eligendi accusantium molestias repellendus. Animi facere eligendi earum! Veniam iste corporis eveniet quasi sapiente ea doloribus fugiat sequi ad quod dolorum quis ab, distinctio assumenda rerum beatae minus nulla, ratione, iusto exercitationem blanditiis asperiores.',
                score: 4.2,
                total: '(8.597)',
                oldPrice: 79.99,
                newPrice: 9.9,
                stars: 1,
                halfStars: 1,
                unStars: 3
        
            },
            {
                _id: uuidv4(),
                img: course4,
                alt: 'Course',
                title: 'Vivo X60 Pro 5G - 128Gb, Khuyến mãi khủng. Duy nhất hôm nay',
                text: 'Vivo',
                des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quo maiores voluptatem exercitationem consequatur soluta eius eligendi accusantium molestias repellendus. Animi facere eligendi earum! Veniam iste corporis eveniet quasi sapiente ea doloribus fugiat sequi ad quod dolorum quis ab, distinctio assumenda rerum beatae minus nulla, ratione, iusto exercitationem blanditiis asperiores.',
                score: 4.6,
                total: '(15.297)',
                oldPrice: 109.99,
                newPrice: 19.9,
                stars: 3,
                halfStars: 1,
                unStars: 1
            },
            {
                _id: uuidv4(),
                img: course5,
                alt: 'Course',
                title: 'OnePlus Nord 5G - 128Gb, Khuyến mãi khủng. Duy nhất hôm nay',
                text: 'OnePlus',
                des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quo maiores voluptatem exercitationem consequatur soluta eius eligendi accusantium molestias repellendus. Animi facere eligendi earum! Veniam iste corporis eveniet quasi sapiente ea doloribus fugiat sequi ad quod dolorum quis ab, distinctio assumenda rerum beatae minus nulla, ratione, iusto exercitationem blanditiis asperiores.',
                score: 4.2,
                total: '(21.597)',
                oldPrice: 159.99,
                newPrice: 99.9,
                stars: 2,
                halfStars: 0,
                unStars: 3
            },
            {
                _id: uuidv4(),
                img: course6,
                alt: 'Course',
                title: 'OPPO Reno4 Pro - 128Gb, Khuyến mãi khủng. Duy nhất hôm nay',
                text: 'OPPO',
                des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quo maiores voluptatem exercitationem consequatur soluta eius eligendi accusantium molestias repellendus. Animi facere eligendi earum! Veniam iste corporis eveniet quasi sapiente ea doloribus fugiat sequi ad quod dolorum quis ab, distinctio assumenda rerum beatae minus nulla, ratione, iusto exercitationem blanditiis asperiores.',
                score: 4.7,
                total: '(12.397)',
                oldPrice: 149.99,
                newPrice: 19.9,
                stars: 3,
                halfStars: 0,
                unStars: 2
            },
            {
                _id: uuidv4(),
                img: course7,
                alt: 'Course',
                title: 'Realme 7 Pro - 128Gb, Khuyến mãi khủng. Duy nhất hôm nay',
                text: 'Realme',
                des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quo maiores voluptatem exercitationem consequatur soluta eius eligendi accusantium molestias repellendus. Animi facere eligendi earum! Veniam iste corporis eveniet quasi sapiente ea doloribus fugiat sequi ad quod dolorum quis ab, distinctio assumenda rerum beatae minus nulla, ratione, iusto exercitationem blanditiis asperiores.',
                score: 4.7,
                total: '(12.397)',
                oldPrice: 149.99,
                newPrice: 19.9,
                stars: 3,
                halfStars: 0,
                unStars: 2
            },
            {
                _id: uuidv4(),
                img: course8,
                alt: 'Course',
                title: 'Vsmart Aris Pro - 128Gb, Khuyến mãi khủng long. Duy nhất hôm nay',
                text: 'Vsmart',
                des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quo maiores voluptatem exercitationem consequatur soluta eius eligendi accusantium molestias repellendus. Animi facere eligendi earum! Veniam iste corporis eveniet quasi sapiente ea doloribus fugiat sequi ad quod dolorum quis ab, distinctio assumenda rerum beatae minus nulla, ratione, iusto exercitationem blanditiis asperiores.',
                score: 4.7,
                total: '(12.397)',
                oldPrice: 149.99,
                newPrice: 19.9,
                stars: 3,
                halfStars: 0,
                unStars: 2
            },
        ],
        cart: [],
    }

    addCart = (id) =>{
        const {products, cart} = this.state;
        const data = products.filter(product =>{
            return product._id === id
        })
        const updatedCart = [...cart,...data].sort((a,b)=>{
            if (a._id > b._id) {
                return 1;
              }
              if (a._id < b._id) {
                return -1;
              }
              return 0;
        })


        this.setState(
            {   cart: updatedCart}
            // ,()=> console.log(cart)

        )

        

    }
  

    reduceCart = (id) =>{
        const {cart} = this.state;

        const updatedCount = cart.filter(product =>{
            return product._id === id
        }).length 

        if(updatedCount===1 && window.confirm("Do you want to delete this product?")){
            const productsIndex = cart.findIndex(item => item._id === id)
            cart.splice(productsIndex, 1) 
            this.setState(
                {   cart: [...cart]}
                // ,()=> console.log(this.state.cart)
                )   
        }if(updatedCount!==1){
            const productsIndex = cart.findIndex(item => item._id === id)
            cart.splice(productsIndex, 1) 
            this.setState(
                {   cart: [...cart]}
                // ,()=> console.log(this.state.cart)
                )   
        }
            
        
    }


    removeCart = (id) =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            const cartItemRemove = cart.filter(item =>{
                return item._id === id
            })
            const cartItemIndex = cart.findIndex(item =>{
                return item._id === id
            })
            cart.splice(cartItemIndex, cartItemRemove.length) 
            this.setState(
                {cart: [...cart]}
                // ,()=> console.log(this.state.cart)

            )
        }   
    }


    componentDidUpdate(){
        console.log("DataProvider componentDidUpdate")
       
    };

    componentDidMount(){
        console.log("DataProvider componentDidMount")
        localStorage.removeItem('dataProduct')
       
    }

    componentWillUnmount(){
        console.log("DataProvider componentWillUnmount")        
    }

  


    render() {
        const {  products, cart} = this.state;
        const {addCart, reduceCart, removeCart} = this;

        return (
            <DataContext.Provider value={{ products, cart, addCart, reduceCart, removeCart}} >
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

export default DataProvider