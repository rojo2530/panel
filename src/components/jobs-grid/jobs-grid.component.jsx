import React from 'react';
import './jobs-grid.style.css';
import { List } from 'antd';

const JobsGrid = ({ jobs }) => {

  return (
    <div className="jobs-grid">
      <List 
        itemLayout="vertical" 
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
            },
          pageSize: 10,
        }}>

      </List>
    </div>
  )

}

export default JobsGrid;