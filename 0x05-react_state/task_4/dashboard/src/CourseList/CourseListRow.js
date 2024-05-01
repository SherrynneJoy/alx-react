import React, { useState } from 'react';
import 'CourseList.css';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
	rowStyle {
		background-color: '#f5f5f5ab'
	},
	headerStyle {
		background-color: '#deb5b545'
	},
	tablehead {
		color: "black",
	},
	rowChecked {
		backgroundColor: '#e6e4e4'
	},
});
export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
	const [checked, setChecked] = useState(false);

	const handleChecks = () => {
		setChecked(prevChecked => !prevChecked);
	};
	if (isHeader) {
		if (textSecondCell === null) {
			return (
				<tr className={checked ? css(styles.headerStyle, styles.rowChecked) : ''}>
				  <th colSpan="2" className={css(styles.tablehead)}>{textFirstCell}</th>
				</tr>
			);
		} else {
			return (
				<tr className={checked ? css(styles.rowStyle, styles.rowChecked) : ''}>
				  <th className={css(styles.tablehead)}>{textFirstCell}</th>
				  <th className={css(styles.tablehead)}>{textSecondCell}</th>
				</tr>
			);
		}
	} else {
		return (
			<tr className={checked ? css(styles.rowStyle, styles.rowChecked) : ''}>
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
