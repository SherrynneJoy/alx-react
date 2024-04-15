import React from "react";
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

StyleSheetTestUtils.suppressStyleInjection();

describe('<BodySectionWithMarginBottom />', () => {
        it('checks that shallowing the BodySection should render correctly the children and one h2 element', () => {
                const wrapper = shallow(
                        <BodySectionWithMarginBottom title="test title">
                        <p>test children node</p>
                        </BodySectionWithMarginBottom>);
        const div = wrapper.find('.bodySectionWithMarginBottom').first();
	const BodySection = wrapper.find('BodySection');
	const internalBody = BodySection();
        const h2 = internalBody.find('h2');
        const p = internalBody.find('p');
	expect(div.exists()).toEqual(true);
	expect(BodySection).to.have.lengthOf(1);
        expect(BodySection.props.title()).toEqual('test title');
        expect(h2).to.have.lengthOf(1);
        expect(h2.text()).toEqual('test title');
        expect(p).to.have.lengthOf(1);
        expect(p.text()).toEqual('test children node');
        });
});
