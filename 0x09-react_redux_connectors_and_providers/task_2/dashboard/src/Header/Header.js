import React from 'react';
import './Header.css';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
	header {
		display: "flex",
		color: "#e0344a",
		align-items: "center",
		border-bottom: "thick solid #e0344a"
	}
	logo {
		display: "flex",
		margin-top: "10px"
	}
});

export default class Header extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const { user, logOut } = this.context
	 }
	return (
		<header className={css(styles.header)}>
      		<img src={logo} className={css(styles.logo)} alt='logo' />
      		<h1>School dashboard</h1>
		{user.isLoggedIn && (
			<p id='logoutSection' className={css(styles.welcomeParagraph, styles.welcomeParagraphSmall)}>Welcome <b>{`${user.email} `}</b><span onClick={logOut} className={css(styles.span)}>(logout)</span></p>
		)
    		</header>
	)
}

export default function mapStateToProps(state) {
	return {
		user: state.get('user')
	};
}

export const mapDispatchToProp = {
	logout: uiActionCreators.logout,
}

export default connect(mapStateToProps)(Header)
