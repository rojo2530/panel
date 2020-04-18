import React from 'react';
import { Input, Row, Col, Select, Radio } from 'antd';
import './search-box.styles.css';

const { Search } = Input;
const { Option } = Select;

const SearchBox = ({ isPortal }) => {


  return (
    <div className="search-box">
      <Row style={{ paddingBottom: 24 }}>
        <Search placeholder="Busca una oferta de trabajo" enterButton />
      </Row>

      <Row style={{ paddingBottom: 24 }}>
        <Col span={12}>
          <Select defaultValue="Todas las localizaciones" style={{ width: '100%' }} >
            <Option value="Todas las localizaciones">Todas las localizaciones</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </Col>
        
        <Col span={12}>
          <Select defaultValue="Todas las categorías" style={{ width: '100%' }} >
            <Option value="Todas las categorías">Todas las categorías</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </Col>
      </Row>
      
      <Row style={{ paddingBottom: 24 }}>
        <Col span={12}>
          <Select defaultValue="Tipos de teletrabajo" style={{ width: '100%' }} >
            <Option value="Todas las localizaciones">Todas las localizaciones</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
        </Select>
        </Col>
        
        <Col span={12}>
        <Select defaultValue="Hoy" style={{ width: '100%' }} >
            <Option value="Hoy">Hoy</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
        </Select>
        </Col>
        </Row>
        
        <Row>
        <Radio.Group onChange={() => {}} value={1}>
          <Radio value={1}>Todas las ofertas</Radio>
          <Radio value={2}>Ofertas Migradas</Radio>
          <Radio value={3}>Ofertas No migradas</Radio>
          </Radio.Group>
      </Row>
    </div>
  )
}

export default SearchBox;