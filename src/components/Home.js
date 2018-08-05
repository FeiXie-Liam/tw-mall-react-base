import React, {Component} from 'react'
import {Row, Col} from 'antd'
import Product from "./Product";
import ProductList from "./ProductList";

class Home extends Component{
    render(){
        return (
            <Row style={{
                background: '#fff',
                padding: 24,
                minHeight: 280,
                marginTop: 30
            }}>
                <ProductList />
            </Row>
        )
    }
}

export default Home;