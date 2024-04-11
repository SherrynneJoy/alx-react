import React from 'react';
import PropTypes from "prop-types";
import './BodySectionWithMarginBottom.css';


class BodySectionWithMarginBottom extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="bodySectionWithMargin">
			<BodySection {..this.props} />
			</div>
		);
	}
}

BodySection.propTypes = {
	title: PropTypes.string
}

BodySection.defaultProps = {
	title: ''
}

export default BodySectionWithMarginBottom;
