import React from 'react';
import Footer from '../Common/Footer';
import Header from '../Common/Header';

import { Layout } from 'antd';

const { Content } = Layout;

class LayoutModule extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Layout>
        <Header />
        <Content style={{ padding: '0 50px', marginTop: 64 }}>{children}</Content>
        <Footer />
      </Layout>
    );
  }
}

export default LayoutModule;
