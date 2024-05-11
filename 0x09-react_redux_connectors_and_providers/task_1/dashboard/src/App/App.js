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
import { user, logOut, AppContext } from "./AppContext";
import { connect } from 'react-redux';

const styles = StyleSheet.create({
	body: {
		display: "flex",
		background-color: "black",
		font-size: "14px"
	},
	footer: {
		display: "flex",
		backgroundColor: "black",
		fontWeight: '600'
	},
});
class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleKeyDown = this.handleKeyDown.bind(this)
		this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this)
		this.handleHideDrawer = this.handleHideDrawer.bind(this)
		this.logOut = this.logOut.bind(this)
		this.logIn = this.logIn.bind(this)
		this.state = {
			displayDrawer: false,
			user,
			logOut: this.logOut,
			listNotifications: [
				{id: 1, type: 'default', value: 'New course available'},
				{id: 2, type: 'urgent', value: 'New resume available'},
				{id: 3, type: 'urgent', html: { __html: getLatestNotification() }}
			]
		};

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
	handleDisplayDrawer() {
		this.setState({ displayDrawer: true });
	}
	logOut() {
		this.setState({ user })
	}
	logIn() {
		this.setState({
			user: {
				email,
				password,
				isLoggedIn: true
			}
	}
	handleHideDrawer() {
		this.setState({ displayDrawer: false }) 
	}
	markNotificationAsRead(id) {
		const newNotification = this.state.listNotifications.filter((not) => {
			not.id !== id})
		this.setState({
			listNotifications: newNotification
		})
	}
	render() {
		const { displayDrawer } = this.state;
		return (
			<AppContext.Provider value={{user: this.state.user, logOut: this.state.logOut}}>
			<Notifications
			listNotifications={listNotifications}
			displayDrawer={displayDrawer}
			handleDisplayDrawer={this.handleDisplayDrawer}
			handleHideDrawer={this.handleHideDrawer}
			markNotificationAsRead={this.markNotificationAsRead}
			/>
				<div className="App">
					<Header />
				</div>
				<div className={css(styles.body)}>{!isLoggedIn ?
					<BodySectionWithMarginBottom title="Login to continue"><Login logIn={this.lgoIn} /></BodySectionWithMarginBottom> :
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

export default function mapStateToProps(state) {
	return {
		isLoggedIn: state.get('isUserLoggedIn'),
		displayDrawer: state.get('isNotificationDrawerVisible')
	};
}

App.defaultProps = {
	isLoggedIn: false,
	logOut: () => {}
};

App.propTypes = {
	isLoggedIn: PropTypes.bool,
	logout: PropTypes.func
};

export default App;
