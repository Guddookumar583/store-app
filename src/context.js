import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';


const ProductContext = React.createContext();
//provider
//consumer

class ProductProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            detailProduct: detailProduct,
            cart: [],
            modalOpen: false,
            modalProduct: detailProduct,
            cartSubTotal: 10,
            cartTax: 0,
            cartTotal: 0,
        }
    }

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState({ products: tempProducts })
    };


    getItem = (id) => {

        const product = this.state.products.find(item => item.id === id);
        return product;
    };

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState({ detailProduct: product })

    }

    addToCart = (id) => {

        let tempProducts = [...this.state.products];

        const index = tempProducts.indexOf(this.getItem(id));

        const product = tempProducts[index];

        product.inCart = true;
        product.count = 1;
        const price = product.price;

        product.total = price;
        //console.log(product.total)
        let cart = [...this.state.cart]
        console.log(cart);
        cart.push(product);
        this.setState({ cart }, () => { this.addTotal() })

        // this.setState({ product: tempProducts, cart: [this.state.cart],product }, () => {

        // })

    }


    openModal = (id) => {
        const product = this.getItem(id);
        this.setState({ modalProduct: product, modalOpen: true })
    }


    closeModal = (id) => {
        this.setState({ modalOpen: false })
    }


    increament = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.count += 1;
        let count = product.count;
        let price = product.price;
        product.total += price;
        let total = product.total;
        this.setState({ count, total }, () => { this.addTotal() })
        //console.log(product.count)

    }

    decreament = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.count -= 1;
        let count = product.count;
        let price = product.price;
        product.total -= price;
        let total = product.total;
        if (count === 0) {
            this.removeItem(id);

        }
        this.setState({ count, total }, () => { this.addTotal() })
        //console.log(product.count)
    }


    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        let cart = [...this.state.cart];
        product.inCart = false;
        // console.log(cart)
        cart = cart.filter(item => item.id !== id);
        this.setState({ cart, tempProducts })
        console.log(product)

    }


    clearCart = () => {
        let cart = [...this.state.cart];
        //product.inCart = false;
        this.setState({ cart: [] }, () => { this.setProducts() });
    }


    addTotal = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState({ cartSubTotal: subTotal, cartTax: tax, cartTotal: total })
    }
    render() {
        return (

            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increament: this.increament,
                decreament: this.decreament,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
