import React from 'react';
import logo from './logo.svg';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	body {
		display: "flex",
		background-color: "black",
		font-size: "14px"
	}
	footer {
		display: "flex",
		background-color: "black",
		font-weight: '600'
	}
});
class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}
	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyDown);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyDown);
	}

	handleKeyDown(event) {
		const { logOut } = this.props;
		if (event.ctrlKey && event.key === 'h') {
			alert('Logging you out');
			logOut();
		}
	}
	render() {
		const { isLoggedIn } = this.props;
		return (
			<>
				<Notifications />
				<div className="App">
					<Header />
				</div>
				<div className={css(styles.body)}>{!isLoggedIn ?
					<BodySectionWithMarginBottom title="Login to continue"><Login /></BodySectionWithMarginBottom> :
					<BodySectionWithMarginBottom title="Course list"><CourseList /></BodySectionWithMarginBottom>}
				<BodySection title="News from the school">
					<p>Hello</p>
				</BodySection>
				</div>
				<div className={css(styles.footer)}>
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
	logOut: () => {}
};

App.propTypes = {
	isLoggedIn: PropTypes.bool,
	logout: PropTypes.func
};

export default App;
