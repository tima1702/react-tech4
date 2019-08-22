import React from 'react';
import { Card, Layout } from 'antd';
import Router from './Router';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { BrowserRouter } from 'react-router-dom';

const { Content } = Layout;

function App() {
  return (<BrowserRouter>
      <Layout className="layout">
        <Header />
        <Content style={{ padding: '50px 50px 0' }}>
          <Card style={{ minHeight: 'calc(100vh - 178px)' }}>
            <Router />
          </Card>
        </Content>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
