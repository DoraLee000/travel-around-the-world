import App, { Container } from 'next/app';
import React from 'react';
import { compose } from 'redux';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import createStore from '../store/store';

// Layout
import Layout from '../components/Common';

// 引用樣式到全域
import '../assets/main.less';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {},
    };
  }

  render() {
    const { Component, pageProps, store, router } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} router={router} />
          </Layout>
        </Provider>
      </Container>
    );
  }
}

export default compose(withRedux(createStore), withReduxSaga({ async: true }))(MyApp);
