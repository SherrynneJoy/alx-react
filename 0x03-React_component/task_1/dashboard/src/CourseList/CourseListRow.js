import React from 'react';
import 'CourseList.css';
import PropTypes from 'prop-types';

export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
	if (isHeader) {
		if (textSecondCell === null) {
			return (
				<tr>
				  <th colSpan="2">{textFirstCell},/th>
				</tr>
			);
		} else {
			return (
				<tr>
				  <th>{textFirstCell}</th>
				  <th>{textSecondCell}</th>
				</tr>
			);
		}
	} else {
		return (
			<tr>
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
