import React from 'react';
import './order-box.style.css';

import { Select } from 'antd';

const { Option } = Select;

const OrderBox = ({ isPortal }) => {

  return (
    <div className="order-box">Ordenar por:
      <Select defaultValue="Fecha: Mas recientes" style={{ width: '100%' }} >
        <Option value="Hoy">Fecha: Mas recientes</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
  </div>
  )
}

export default OrderBox;