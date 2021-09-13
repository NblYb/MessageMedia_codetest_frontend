import { Table, message } from 'antd';
import React, { useState, useEffect } from 'react';
import GetMessageHistory from '../../../../utils/GetMessageHistory';

const columns = [
  {
    title: 'Destination Number',
    dataIndex: 'destinationNumber',
    sorter: (a, b) => a.destinationNumber - b.destinationNumber,
    sortDirections: ['ascend'],
    defaultSortOrder: 'ascend',
    width: '20%',
    responsive: ['md']
  },
  {
    title: 'Message',
    dataIndex: 'message',
    width: '40%',
  },
  {
    title: 'TimeStamp',
    dataIndex: 'messageTime',
    sorter: (a, b) => a.messageTime - b.messageTime,
    sortDirections: ['ascend'],
    render: messageTime => `${new Date(messageTime * 1000).toLocaleString()}`,
    width: '20%',
    responsive: ['md']
  },
  {
    title: 'Message Status',
    dataIndex: 'messageStatus',
    sorter: (a, b) => a.messageStatus - b.messageStatus,
    sortDirections: ['descend'],
    render: messageStatus => messageStatus? "success": "fail",
    width: '20%',
    responsive: ['md']
  },
];

const MessageTable = () => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });
  const [loading, setLoading] = useState(false);
  const username = localStorage.getItem('username');
  const JWTToken = localStorage.getItem('Token');

  useEffect(() => {
    setLoading(true);
    GetMessageHistory(username, JWTToken)
      .then(res => {
        setData(res.data.messages);
        setLoading(false);
      })
      .catch(() => {
        message.error('Message history request failed!')
      });
  }, [])

  const handleTableChange = (pagination, filters, sorter) => {
    setPagination(pagination);
  };

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  )
}

export default MessageTable;