import React from 'react';
import { shallow, mount } from 'enzyme';
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
		const context = {
			user: {
				email: "",
				password: "",
				isLoggedIn: false,
			},
		};
		const wrapper = mount(
			<AppContext.Provider value={context}>
				<Footer />
			</AppContext.Provider />
		);
		expect(wrapper.find('footer p').length).toBe(1);

		wrapper.unmount();
	});
	it('verify that the link is displayed when the user is logged in within the context', () => {
		const value = { user: { email: 'thedude@aim.com', password: 'thedudeabides', isLoggedIn: true }, logOut: () => { } }
		const wrapper = mount(<AppContext.Provider value={value}><Footer /></AppContext.Provider>);
		expect(wrapper.find('footer a').text()).toContain('Contact us');
	});
});
