import { shallow } from 'enzyme';
import React from 'react';
import Notifications from './Notifications';


describe('Notifications tests', () => {
        it('renders Notification component without crashing', () => {
          const component = shallow(<Notifications />);
	  expect(component).toBeDefined();
	});
	it('renders ul', () => {
	  const component = shallow(<Notifications />);
	  expect(component.find('ul')).toBeDefined();
	});
	it('renders three li elements', () => {
	  const component = shallow(<Notifications />);
	  expect(component.find('ul')).toHaveLength(3);
	});
	it('renders correct text', () => {
	  const component = shallow(<Notifications />);
	  expect(component.find('p').prop('children')).toBe(
		  'Here is the list of notifications'
	  );
	});
});
