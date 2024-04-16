import React from 'react';
import { css, StyleSheet } from "aphrodite";
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
	headerRowStyle: {
		 backgroundColor: '#deb5b545',
	},
	rowStyle: {
		backgroundColor: '#f5f5f5ab',
	},
	tableHeader: {
		textAlign: 'center',
		padding: '2px',
	}
})

export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
	if (isHeader) {
		if (textSecondCell === null) {
			return (
				<tr className={css(styles.headerRowStyle)}>
				  <th colSpan="2">{textFirstCell},/th>
				</tr>
			);
		} else {
			return (
				<tr className={css(styles.rowStyle)}>
				  <th>{textFirstCell}</th>
				  <th>{textSecondCell}</th>
				</tr>
			);
		}
	} else {
		return (
			<tr className={css(styles.rowStyle)}>
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
