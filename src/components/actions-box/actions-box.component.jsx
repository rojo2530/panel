import React from 'react';
import './actions-box.style.css';
import { Row, Button } from 'antd';

const ActionsBox = () => {

  return (
    <div className="actions-box">
      <Row style={{ paddingBottom: 24 }}>
        <Button type="primary" size="medium" block>Migrar Oferta a Wordpress</Button>
      </Row>
      <Row>
        <Button type="primary" size="medium" block className="btn-new-job">Nueva Oferta de Trabajo</Button>
      </Row>
    </div>
  )
}

export default ActionsBox;