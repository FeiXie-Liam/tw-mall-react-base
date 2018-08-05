import React, {Component} from 'react';
import {connect} from 'react-redux';
import Product from "./Product";
import {loadProducts} from "../actions/products";


class ProductList extends Component{
    componentDidMount(){
        const {loadProducts} = this.props;
        loadProducts();
    }
    render(){
        const {products} = this.props;
        return products.map(product => <Product key={product.id} {...product}/>);
    }
}

const mapStateToProps = ({products}) => ({
    products
});

const mapDispatchToProps = (dispatch) => ({
    loadProducts: ()=>{
        dispatch(loadProducts())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);