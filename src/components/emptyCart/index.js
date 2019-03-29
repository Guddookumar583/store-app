import React from 'react';
import { ButtonContainer } from '../../styledComponent';
import { Link } from 'react-router-dom';
 
export default function EmptyCart() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <h1>Your Cart is Currently empty</h1>
                    <p>Add items to it now</p>
                    <Link to = '/'>
                    <ButtonContainer>shop now</ButtonContainer>
                    </Link>
                    
                </div>

            </div>
        </div>
    )

}