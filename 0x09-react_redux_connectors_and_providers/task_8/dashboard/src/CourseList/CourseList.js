import React from 'react';
import propTypes from 'prop-types'
import CourseListRow from './CourseListRow';
import { StyleSheet, css } from 'aphrodite';
import { fetchCourses, selectCourse, unSelectCourse } from './actions/courseActionCreators';
import { getListCourses } from './selectors/courseSelector';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
	CourseList {
	 	margin: '40px 0 350px',
	 	border: "1px solid var(--table-color)",
	  	border-collapse: "collapse",
	  	width: "85%"
	}
});

const courseList = ({ listCourses, fetchCourses, selectCourse, unSelectCourse }) => {
	useEffect(() => {
		fetchCourses();
	}, [fetchCourses]);

	const onChangeRow = (id, checked) => {
		if (checked) {
			selectCourse(id)
		} else {
			unselectCourse(id)
		}
	};
}
export default function CourseList() {
	return <table id={css(styles.CourseList)}
		  <thead>
		    <CourseListRow textFirstCell='Available courses' isHeader={true} />
		    <CourseListRow textFirstCell='Course name' textSecondCell='Credit' isHeader={true} />
		  </thead>
		  <tbody id="CourseBody">
		    {listCourses.length === 0 & (
			    <tr>
			    <td>No course available yet</td>
			    </tr>
		    )}
	 	    {listCourses.map(course => (
			    <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isChecked={course.isSelected} onChangeRow={onChangeRow}/>
		    ))}
		  </tbody>
		</table>
}

CourseList.defaultProps = {
	listCourses: []
}
CourseList.propTypes = {
        listCourses: propTypes.arrayOf(CourseShape),
	fetchCourses: propTypes.func.isRequired,
	selectCourse: propTypes.func.isRequired,
	unSelectCourse: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	listCourses: getListCourses(state),
});

const mapDispatchToProps = {
	fetchCourses,
	selectCourse,
	unSelectCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
}
