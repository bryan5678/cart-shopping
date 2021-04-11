import React, { Component } from 'react'
import {  BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.scss';
import Header from './sass/Layout/Header';

// import Home from './sass/Layout/Home';
// import Product from './sass/Layout/Product';
// import Detail from './sass/Layout/Detail';
// import Contact from './sass/Layout/Contact';
// import About from './sass/Layout/About';
// import NotFound from './sass/Layout/NotFound';

import routes from './Route'
import DataProvider from './sass/Layout/DataProvider'
// import Data from './sass/Layout/Data'



export class App extends Component {
  showRoute = (routes)=>{
    let result = null
    if(routes.length > 0){
      result = routes.map((route, index)=>{
        return (
          <Route 
            key={index}
            path={route.path}
            component={route.main} 
            exact={route.exact} />
        )
    })
    } 
    return result
  }
  
  render() {
    return (
      <DataProvider>
        <Router>
            <Header/>
            <section>
                <Switch>
                  {this.showRoute(routes)}
                  {/* <Route path="/" component={Home} exact/>
                  <Route path="/product" component={Product} exact/>
                  <Route path="/product/:id" component={Detail} />
                  <Route path="/contact" component={Contact}/>
                  <Route path="/about" component={About}/>
                  <Route component={NotFound}/> */}
                </Switch>
            </section>  
        </Router>
      </DataProvider>
    )
  }

  
}

export default App

