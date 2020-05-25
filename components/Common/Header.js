import React, { useState } from 'react';
import { Layout, Menu, Carousel } from 'antd';
const { Header } = Layout;

export default () => {
  // const [color, setColor] = useState('blue');
  // const changeColor = () => {
  //   setColor(color == 'blue' ? 'red' : 'blue');
  //   console.log('~~');
  // };
  return (
    <>
      <Header className="header">
        <div className="logo" />
        <Menu className="header-menu" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <style jsx="true">
        {`
        .header,.header-menu {
          background-color: #FFF;
          color:#FFF
        }
        .header {
          position: 'fixed',
          z-index:100,
          width:100%
        }
        .header-menu{
            line-height:40px;
            border-bottom:0
        }
      `}
      </style>
    </>
  );
};

// export default HeaderModule;
