import React from "react";
import { shallow } from 'enzyme';
import BodySection from "./BodySection";

describe("<BodySection />", () => {
	it("checks that shallowing the component should render correctly the children and one h2 element", () => {
		const wrapper = shallow(
			<BodySection title="test title">
			  <p>test children node</p>
			</BodySection>
			const div = wrapper.find('.bodySection').first();
	const h2 = wrapper.find('h2');
	const p = wrapper.find('p');
	expect(div.exists()).toEqual(true);
	expect(h2).to.have.lengthOf(1);
	expect(h2.text()).toEqual('test title');
	expect(p).to.have.lengthOf(1);
	expect(p.text()).toEqual('test children node');
	});
	}
}
