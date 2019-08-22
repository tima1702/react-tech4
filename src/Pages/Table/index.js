import React, { useState } from 'react';
import { Button, Checkbox, Col, Divider, Row, Table as AntTable, Tag } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <Button type="link">{text}</Button>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <Button type="link">Invite {record.name}</Button>
        <Divider type="vertical" />
        <Button type="link">Delete</Button>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

function Table() {
  const [activeColumn, setActiveColumn] = useState(columns.map(({ title }) => title));

  return <>
    <Row gutter={10} style={{ marginBottom: 10 }}>
      <Checkbox.Group style={{ width: '100%' }} value={activeColumn} onChange={setActiveColumn}>
        {columns.map(({ title }) => <Col key={title} span={4}>
          <Checkbox value={title}>
            {title}
          </Checkbox>
        </Col>)}
      </Checkbox.Group>
    </Row>
    <Row>
      <AntTable bordered
                pagination={false}
                columns={columns.filter(({ title }) => activeColumn.includes(title))}
                dataSource={data} />
    </Row>
  </>;
}

export default Table;