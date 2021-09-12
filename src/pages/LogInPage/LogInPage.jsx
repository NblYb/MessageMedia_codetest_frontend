import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button, Row, Col, message } from 'antd';
import LogIn from '../../utils/LogIn';
import { Link, useHistory } from 'react-router-dom';

const StyledRow = styled(Row)`
  min-height: inherit;
`

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};

const LinkWrapper = styled.div`
  margin: 10px 0 20px 0;
`

const TitleWrapper = styled.div`
    text-align: center;
`

function LogInPage() {
  const history = useHistory();
  const onFinish = (values) => {
    LogIn(values)
      .then(res => {
        localStorage.setItem('Token', res.headers.authorization);
        localStorage.setItem('username', values.username);
        history.push('/message');
        message.success('Log in succeed!');
      })
      .catch(() => {
        message.error('Incorrect email or password!')
      });
  };

  const onFinishFailed = (errorInfo) => {
    const errors = errorInfo.errorFields.map((item) => item.errors);
    message.error(errors.join(' '));
  };

  return (
    <StyledRow justify="center" align="middle">
      <Col span={8}>
        <TitleWrapper>
          <h1>Log In</h1>
        </TitleWrapper>
        <Form
          name="login"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          {...layout}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={
              [
                { required: true, message: 'Please input your username!' }
              ]
            }
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Link to='/register'>
            <LinkWrapper>
              Don&apos;t have an account? Register.
            </LinkWrapper>
          </Link>
          <Form.Item justify="center">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </StyledRow>
  )
}

export default LogInPage;
