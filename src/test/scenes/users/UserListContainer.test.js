import React from 'react';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { shallow, mount } from 'enzyme';
import testUsers from './../../test_users.json';

import UserListContainer from './../../../main/scenes/users/UserListContainer';

it('renders a UserList with correct props', () => {
  const getUsersMock = jest.fn();
  getUsersMock.mockReturnValue(Observable.from(testUsers))

  const wrapper = shallow(<UserListContainer getUsers={getUsersMock} />);
  wrapper.instance().componentDidMount();
  expect(getUsersMock).toHaveBeenCalled();

  expect(wrapper.find('UserList').getElement).toBeDefined();
  expect(wrapper.props().users).toEqual(testUsers);
});
