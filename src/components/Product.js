import React from 'react';
import {Col, Card, Icon} from 'antd';

const {Meta} = Card;

const Product = ({id, name, unit, imageUrl, price}) => {
    return (
        <Col span={6}>
            <Card hoverable
                  style={{width: 240}}
                  cover={<img src={imageUrl + `/${id}.jpg`}/>}
                  actions={[<Icon type="shopping-cart"/>]}>
                <Meta title={name}
                      description={`单价：${price}元/${unit}`}>
                </Meta>
            </Card>
        </Col>
    )
}

export default Product;