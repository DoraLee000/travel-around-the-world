import React from 'react';

import { Button } from 'antd';
class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <div className="layout">{children}</div>
      </div>
    );
  }
}

export default Layout;
