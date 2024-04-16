import React from 'react';
import 'CourseList.css';
import PropTypes from 'prop-types';

export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
	const rowStyle = {
		backgroundColor: '#f5f5f5ab';
	};
	const headerRowStyle = {
		backgroundColor: '#deb5b545';
	};
	if (isHeader) {
		if (textSecondCell === null) {
			return (
				<tr style={headerRowStyle}>
				  <th colSpan="2">{textFirstCell},/th>
				</tr>
			);
		} else {
			return (
				<tr style={headerRowStyle}>
				  <th>{textFirstCell}</th>
				  <th>{textSecondCell}</th>
				</tr>
			);
		}
	} else {
		return (
			<tr style={rowStyle}>
			  <td>{textFirstCell}</td>
			  <td>{textSecondCell}</td>
			</tr>
		);
	}
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: propTypes.bool,
  textFirstCell: propTypes.string.isRequired,
  textSecondCell: propTypes.oneOfType([
	  propTypes.string,
	  propTypes.number,
  ])
};
