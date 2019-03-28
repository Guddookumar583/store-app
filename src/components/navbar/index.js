import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//import styled from 'styled-components';
import {ButtonContainer,NavWrapper} from '../../styledComponent'
import './styleNavbar.css';

export default class Navbar extends Component {
  render() {
    return (
     <React.Fragment>
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
          <Link to ='/'>
           <i className="fa fa-home"></i>
          </Link>
         <ul className="navbar-NavWrapper align-items-center">
         <li>
             <Link to='/' className="NavWrapper-link">
             <span className="mt-5">
               products
             </span>
             
             </Link>
         </li>
         </ul>
         <Link to="/cart" className="ml-auto">
           <ButtonContainer>
             <span className="mr-2">
                <i className="fa fa-cart-plus" />
             </span>
            
             my cart
            </ButtonContainer>
          </Link>
        </NavWrapper>
      </React.Fragment>

    );
  }
}
