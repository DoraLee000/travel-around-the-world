import Link from 'next/link';
import { Component } from 'react';
import { Button } from 'antd';
import fetch from 'isomorphic-unfetch';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../../store/actions';

class About extends Component {
  increment = () => {
    this.props.dispatch(increment());
  };

  decrement = () => {
    this.props.dispatch(decrement());
  };

  reset = () => {
    this.props.dispatch(reset());
  };
  render() {
    const { count } = this.props;
    return (
      <div>
        測試saga / redux
        <Link href="/">
          <a>Home</a>
        </Link>
        <div>{count}</div>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.increment}>+</Button>
      </div>
    );
  }
}

//測試

// About.getInitialProps = async (ctx) => {
//   const { store } = ctx;
//   const { dispatch, getState } = store;
//   increase: () => dispatch(increase()),
//   decrease: () => dispatch(decrease())
//   return store;
//   // console.log('store', store.dispatch);
// };

const mapStateToProps = ({ count }) => ({ count });

export default connect(mapStateToProps)(About);
