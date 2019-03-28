import  React, { Component } from 'react';

import { ProductConsumer } from '../../context';
import { ButtonContainer ,ModalConatainer } from '../../styledComponent';
import { Link } from 'react-router-dom';

export default class Modal extends Component{

    render(){
        return(
            <ProductConsumer>
                { (value) =>{
                    const {modalOpen,closeModal} =value;
                    const {img,title,price} = value.modalProduct;

                    if(!modalOpen){
                        return null;
                    }
                    else{
                        return(
                        <ModalConatainer>
                            <div className="container">
                               <div className="row">
                                  <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-caapitalize">
                                  <h5>item added to the cart</h5>
                                   <img src = {img} className="img-fluid" alt="product" />
                                   <h5>{title}</h5>
                                   <h5>price:$ {price}</h5>

                                     <Link to ="/">
                                           <ButtonContainer onClick={()=>closeModal()}>
                                              store
                                           </ButtonContainer>
                                     </Link>
                                     <Link to ="/cart">
                                           <ButtonContainer cart onClick={()=>closeModal()}>
                                               go to cart
                                           </ButtonContainer>
                                     </Link>
                                  </div>

                               </div>

                            </div>

                        </ModalConatainer>
                        )
                    }
                }

                }
            </ProductConsumer>
        )
    }

}