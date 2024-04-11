import React from 'react';
import './CourseList.css';
import CourseShape from './CourseShape'
import propTypes from 'prop-types'
import CourseListRow from './CourseListRow';

export default function CourseList() {
	return <table id="CourseList">
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
			    <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />
		    ))}
		  </tbody>
		</table>
}

CourseList.defaultProps = {
	listCourses: []
}
CourseList.propTypes = {
        listCourses: propTypes.array
}
