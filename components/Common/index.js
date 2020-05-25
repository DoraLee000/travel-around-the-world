import React from 'react';
import Footer from '../Common/Footer';
import Header from '../Common/Header';

import { Layout, Carousel, Row, Col } from 'antd';

const { Content } = Layout;

class LayoutModule extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Layout>
          <Header />
          <Content>
            <div className="banner-carousel">
              <Carousel>
                <img src="/static/images/banner.jpg" style={{ width: '100%' }} />
              </Carousel>
            </div>
            <Row justify="space-around" type="flex">
              <Col span={20} className="card mb-50">
                <Row gutter={16}>{children}</Row>
              </Col>
            </Row>
          </Content>
          <Footer />
        </Layout>
        <style jsx="true">{``}</style>
      </>
    );
  }
}

export default LayoutModule;
