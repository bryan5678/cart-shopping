import React from 'react'
import Home from './sass/Layout/Home';
import Product from './sass/Layout/Product';
import Contact from './sass/Layout/Contact';
import About from './sass/Layout/About';
import NotFound from './sass/Layout/NotFound';
import Detail from './sass/Layout/Detail';
import Cart from './sass/Layout/Cart';


const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/product',
        exact: true,
        main: ({match}) => <Product match={match} />
    },
    {
        path: '/product/:id',
        exact: false,
        main: ({match}) => <Detail match={match} />
    },
    {
        path: '/contact',
        exact: false,
        main: () => <Contact />
    },
    {
        path: '/about',
        exact: false,
        main: () => <About />
    },
    {
        path: '/cart',
        exact: false,
        main: ({match}) => <Cart match={match} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    },
]

export default routes
