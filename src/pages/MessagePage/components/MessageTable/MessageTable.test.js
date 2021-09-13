import React from 'react';
import { shallow } from 'enzyme';
import MessageTable from './MessageTable';
import { Table } from 'antd';

describe('MessageTable', () => {

  const noop = () => {};

  it('contains all children', () => {
    const wrapper1 = shallow(<MessageTable/>);
    expect(wrapper1.find(Table)).toHaveLength(1);
  })
})