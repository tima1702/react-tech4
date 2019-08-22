import React from 'react';
import { Layout } from 'antd';
const AntFooter = Layout.Footer;

function Footer() {
    console.log('...Footer RENDER.......');
    return <AntFooter style={{ textAlign: 'center' }}>ЛУЧШИЙ ПОДВАЛ</AntFooter>;
}

export default Footer;
