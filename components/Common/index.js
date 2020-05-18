import React from 'react';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <h1>TEST</h1>
        <div className="layout">{children}</div>
      </div>
    );
  }
}

export default Layout;
