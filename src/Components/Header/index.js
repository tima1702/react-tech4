import React from 'react';
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';
const AntHeader = Layout.Header;

function Header() {
    return <AntHeader>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: '64px' }}
        >
            <Menu.Item key="1">
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/work">Work</Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to="/table">Table</Link>
            </Menu.Item>
        </Menu>
    </AntHeader>;
}

export default Header;