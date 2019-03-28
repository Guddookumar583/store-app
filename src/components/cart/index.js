import React, { Component } from 'react';
import Title from '../title';
import CartColumn from '../../components/cartColumns/cartColumn';
import EmptyCart from '../emptyCart';
import { ProductConsumer } from '../../context';
import CartList from '../cartList';
import CartTotal from '../cartTotal';


class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            //console.log(cart);
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="Cart" />
                  <CartColumn />
                  <CartList value={value} />
                  <CartTotal value = {value} history={this.props.history} />
                </React.Fragment>
              );
            }
            else {
              return (<EmptyCart />);
            }
          }

          }

        </ProductConsumer>
      </section>


    );
  }
}

export default Cart;