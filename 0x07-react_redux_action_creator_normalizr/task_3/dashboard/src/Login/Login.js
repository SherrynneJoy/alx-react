import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	login : {
		margin: "10px 10px"
	},
	screenSize : {
		'@media (max-width: 900px)': {
			display: 'block',
			marginTop: '5px',
			marginBottom: '10px'
		}
	}
});

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
		this.handleChangeEmail = this.handleChangeEmail.bind(this)
		this.handleChangePassword = this.handleChangePassword.bind(this)
	}
	this.state = {
		email: '',
		password: '',
		enableSubmit: false
	}
	handleLoginSubmit(event) {
		this.props.logIn(this.state.email, this.state.password)
	}
	handleChangeEmail(event) {
		this.setState({
			email: event.target.value
		}, () => {
			if(this.state.email !== '' && this.state.password !== '') {
				this.setState({
					enableSubmit: true
				})
			}
		})
	}

	handleChangePassword(event) {
		this.setState({
			email: event.target.value
	}, () => {
		if(this.state.email !== '' && this.state.password !== '') {
			this.setState({
				enableSubmit: true
			})
		}
	})
      }
	render() {
		return (
			<main role='main' className={css(styles.login, styles.screenSize)}>
			<p>Login to access the full dashboard</p>
			<form onSubmit={this.handleLoginSubmit}>
	  		<label htmlFor='email'>Email</label>
	  		<input type='email' name='email' id='email' value={this.state.email}/>
	  		<label htmlFor='password'>Password</label>
	  		<input type='password' name='password' id='password' value={this.state.password}/>
	  		<input type='submit' value="OK" disabled={!this.state.enableSubmit}/>
	  		</form>
			</main>
		);
}

export default Login;
