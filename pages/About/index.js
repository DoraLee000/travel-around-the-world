import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { Button } from 'antd';

const About = ({ count, decrement, increment, reset }) => {
  return (
    <div>
      測試saga / redux {count}
      <Link href="/">
        <a>Home</a>
      </Link>
      <Button onClick={decrement}>-</Button>
      <Button onClick={increment}>+</Button>
      <Button onClick={reset}>龜0</Button>
    </div>
  );
};

// 因為在 _app.js Provider store={store}
// 解構 reducer 取 data
const mapStateToProps = ({ count }) => ({ count });

// 解構 actions
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    reset: () => dispatch({ type: 'RESET' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
