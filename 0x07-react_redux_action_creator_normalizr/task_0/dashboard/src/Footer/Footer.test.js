import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('<Footer />', () => {
        it('renders without crashing', () => {
                const wrapper = shallow(<Footer />);
                expect(wrapper.exists()).toBe(true);
        });
        it('renders the text Copyright', () => {
                const wrapper = shallow(<Footer />);
                expect(wrapper.text()).toContain('Copyright');
        });
	it('verify that the link is not displayed when the user is logged out within the context', () => {
		const wrapper = mount(<Footer />);
		expect(wrapper.find('footer p').length).toBe(1);
	});
	it('verify that the link is displayed when the user is logged in within the context', () => {
		const value = { user: { email: 'thedude@aim.com', password: 'thedudeabides', isLoggedIn: true }, logOut: () => { } }
		const wrapper = mount(<AppContext.Provider value={value}><Footer /></AppContext.Provider>);
		expect(wrapper.find('footer a').text()).toContain('Contact us');
	});
});
