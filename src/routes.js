import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import Navbar from './components/navbar/';
import ProductLists from './components/productLists';
import Cart from './components/cart';
import Detail from './components/detail';
import Default from './components/default';
import Modal from './components/modal';

class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
        <Route exact path="/" component={ProductLists} />
        <Route path="/cart" component={Cart} />
        <Route path="/details" component={Detail} />
        <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>

    );
  }
}

export default Routes;