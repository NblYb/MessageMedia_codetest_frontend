import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Form, Input, Button, Row, Col, message } from 'antd';
import Register from '../../utils/Register'
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

const ENCRYPTION_STRENGTH = 10;
const encodePassword = (password) => {
    const bcrypt = require("bcryptjs");
    const salt = bcrypt.genSaltSync(ENCRYPTION_STRENGTH);
    const code = bcrypt.hashSync(password, salt);

    return code;
};

function RegisterPage () {
  const history = useHistory();
  const onFinish = (values) => {
    values.encodedPassword = encodePassword(values.encodedPassword);
    Register(values)
      .then(res => {
          history.push('/');
          message.success('Register succeed! Please Log in your new account!');
      })
      .catch(() => {
        message.error('Register failed!')
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
          <h1>Register</h1>
        </TitleWrapper>
        <Form
          name="register"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          {...layout}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={
              [
                { required: true, message: 'Please input your username!' },
              ]
            }
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="encodedPassword"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Link to='/'>
            <LinkWrapper>
              Already have an acccount? Log in.
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

export default RegisterPage;
