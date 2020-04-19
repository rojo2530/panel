import React from 'react'
import { Layout, Row, Col } from 'antd';
import './homepage.style.css';

import HeaderPanel from '../../components/header/header.component'
import SearchBox from '../../components/search-box/search-box.component'
import ActionsBox from '../../components/actions-box/actions-box.component'
import OrderBox from '../../components/order-box/order-box.component'
import JobsGrid from '../../components/jobs-grid/jobs-grid.component'

const { Content } = Layout;

const HomePage = () => (
  <Layout>
    <HeaderPanel />
    <Content className="site-layout">
      <Row className="first-row">
        <Col span={10}>
          <SearchBox isPortal={false} />
        </Col>
        
        <Col span={4}>
          <ActionsBox />
        </Col>
        
        <Col span={10}>
          <SearchBox isPortal />
        </Col>
      </Row>

      <Row className="second-row">
        <Col span={12}>
          <OrderBox isPortal={false} />
        </Col>

        <Col span={12}>
          <OrderBox isPortal />
        </Col>
      </Row>

      <Row className="third-row">
        <Col span={12}>
          <JobsGrid />          
        </Col>

        <Col span={12}>
          <JobsGrid />
        </Col>
      </Row>
    </Content>
  </Layout>
)

export default HomePage
