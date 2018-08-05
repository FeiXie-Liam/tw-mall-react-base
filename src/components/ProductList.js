import React, {Component} from 'react';
import {connect} from 'react-redux';
import Product from "./Product";


class ProductList extends Component{
    render(){
        const {products} = this.props;
        return products.map(product => <Product key={product.id} {...product}/>);
    }
}

const mapStateToProps = ({products}) => ({
    products
});

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);