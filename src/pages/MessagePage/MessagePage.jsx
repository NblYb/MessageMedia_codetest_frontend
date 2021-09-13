import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Form, Input, Button, Row, Col, message } from 'antd';
import PostMessage from '../../utils/PostMessage';
import { useHistory } from 'react-router-dom';
import MessageTable from './components/MessageTable';

const StyledRow = styled(Row)`
  min-height: inherit;
`

const StyledButton = styled(Button)`
margin: 0 5px 20px 5px;
`

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};

const TitleWrapper = styled.div`
    text-align: center;
`

function MessagePage() {
  const history = useHistory();
  const username = localStorage.getItem('username');
  const JWTToken = localStorage.getItem('Token');
  const [showTable, setShowTable] = useState(false);

  const onFinish = (value) => {
    value["messageTime"] = Math.floor(Date.now() / 1000);
    setShowTable(false);
    PostMessage(username, JWTToken, value)
      .then(res => {
        message.success('Message sent!');
        setShowTable(true);
      })
      .catch(() => {
        message.error('Message sent failed!')
      });
  };

  const handleClick = () => {
    setShowTable(!showTable);
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  }

  const onFinishFailed = (errorInfo) => {
    const errors = errorInfo.errorFields.map((item) => item.errors);
    message.error(errors.join(' '));
  };

  return (
    <StyledRow justify="center" align="middle">
      <Col span={12}>
        <TitleWrapper>
          <h1>Send Message</h1>
        </TitleWrapper>
        <Form
          name="Message"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          {...layout}
        >
          <Form.Item
            label="Destination Number"
            name="destinationNumber"
            rules={
              [
                { required: true, message: 'Please input your destination Number!' }
              ]
            }
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: 'Please input your message!' }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item justify="center">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <StyledButton onClick={handleLogout}>logout</StyledButton>
        <StyledButton onClick={handleClick}>Message History</StyledButton>
        {showTable && <MessageTable></MessageTable>}
      </Col>
    </StyledRow>
  )
}

export default MessagePage;
