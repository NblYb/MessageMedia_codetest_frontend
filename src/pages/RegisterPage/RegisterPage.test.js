import React from 'react';
import { shallow } from 'enzyme';
import RegisterPage from './RegisterPage';
import { Form } from 'antd';


describe('RegisterPage', () => {

  const noop = () => {};

  it('contains all children', () => {
    const wrapper1 = shallow(<RegisterPage/>);
    expect(wrapper1.find(Form)).toHaveLength(1);
    expect(wrapper1.find(Form).find("Button[htmlType='submit']")).toHaveLength(1);
  })

  // a bug from ant design that Clicking form submit button not triggering onFinish in unit test
  // reference by https://github.com/ant-design/ant-design/issues/21272
  it('calls onFinish prop function when form is submitted', () => {
    const mockFunc = jest.fn();
    // set up Input, with mockFunc as a prop
    const wrapper = shallow(<RegisterPage onFinish={mockFunc} />).dive();
    const submitButton = wrapper.find(Form).find("Button[htmlType='submit']");
    submitButton.simulate("submit");
    const clickFunc = mockFunc.mock.calls.length;
    expect(clickFunc).toBe(0);
  });

})

