import React, { Component } from 'react'
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
                _id: 1,
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
                _id: 2,
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
                _id: 3,
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
                _id: 4,
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
                _id: 5,
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
                _id: 6,
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
                _id: 7,
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
                _id: 8,
                img: course8,
                alt: 'Course',
                title: 'Vsmart Aris Pro - 128Gb, Khuyến mãi khủng. Duy nhất hôm nay',
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
            return a._id - b._id
        })
        

        // const updatedCount = updatedCart.filter(product =>{
        //     return product._id == id
        // }).length

        // const updatedCountIndex = products.findIndex(product =>{
        //     return product._id == id
        // })

        // const totalArr = products[updatedCountIndex].price * updatedCount


        this.setState(
            {   cart: updatedCart}
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
                // ,()=> console.log(this.state.products)
                )   
        }if(updatedCount!==1){
            const productsIndex = cart.findIndex(item => item._id === id)
            cart.splice(productsIndex, 1) 
            this.setState(
                {   cart: [...cart]}
                // ,()=> console.log(this.state.products)
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
            // const updatedCount = cart.filter(product =>{
            //     return product._id === id
            // }).length
            // console.log(updatedCount)
            this.setState(
                {cart: [...cart]}
            )
        }   
    }

    updateTotal = () =>{
        const {cart} = this.state;

        // let unique = [...new Set(cart)];
        // let duplicates = unique.map(item => cart.filter(str => str === item).length);
        // let duplicates = unique.map(item => [item._id, cart.filter(str => str === item).length]);
        // console.log(duplicates)
        // let obj = Object.fromEntries(duplicates)

        const upTotal = cart.reduce((prev, item)=>{
            return prev + (item.price * item.count)
        },0)
        
        this.setState(
            {total: upTotal}
            ,()=> console.log(this.state.total)
            )

          
        // this.setState({
        //     products: products.map(
        //       product => product._id === id? { ...product, count: countChanging }: product
        //     )       
        //   },()=> console.log(this.state.products))
    }


    render() {
        const {products, cart, total} = this.state;
        const {addCart, reduceCart, removeCart} = this;

        return (
            <DataContext.Provider value={{products, cart, total, addCart, reduceCart, removeCart}} >
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

export default DataProvider