import React from 'react';
import logo from './logo.svg';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";

class App extends React.Component {
	render() {
		const { isLoggedIn } = this.props; // Access props using this.props, not this.propTypes
		return (
			<>
				<Notifications />
				<div className="App">
					<Header />
				</div>
				<div className="App-body">
					{!isLoggedIn ? <Login /> : <CourseList />}
				</div>
				<div className="App-footer">
					<Footer />
				</div>
			</>
		);
	}
}

const listCourses = [
	{
		id: 1,
		name: 'ES6',
		credit: '60'
	},
	{
		id: 2,
		name: 'Webpack',
		credit: '20'
	},
	{
		id: 3,
		name: 'React',
		credit: '40'
	}
];

const listNotifications = [
	{
		id: 1,
		type: "default",
		value: "New course available"
	},
	{
		id: 2,
		type: "urgent",
		value: "New resume available"
	},
	{
		id: 3,
		html: {
			__html: 'Some notification content' // You need to define or import getLatestNotification function
		},
		type: "urgent",
	}
];

App.defaultProps = {
	isLoggedIn: false,
};

App.propTypes = {
	isLoggedIn: PropTypes.bool,
};

export default App;
