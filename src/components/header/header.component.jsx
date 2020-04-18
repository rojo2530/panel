import React from 'react'
import { Layout, Menu } from 'antd';
import './header.style.css'

const { Header } = Layout;

const HeaderPanel = () => (
  <Header>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">Panel de Ofertas de Trabajo</Menu.Item>
    </Menu>
  </Header>
  
)

export default HeaderPanel;