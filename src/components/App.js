import React, {Component} from 'react';
import {Layout, Menu} from 'antd';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import Home from './Home'
import Order from './Order'

const {Header, Footer, Content} = Layout;

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout className="layout">
                    <Header>
                        <div className="logo"/>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{lineHeight: '64px'}}
                        >
                            <Menu.Item key="1">
                                <Link to="/">商城首页</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/order">我的订单</Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{padding: '0 50px'}}>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/order" component={Order} />
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;
